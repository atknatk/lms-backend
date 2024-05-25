export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    const userPermissionResgister =  await strapi
    .service("plugin::users-permissions.providers-registry");
    userPermissionResgister.register(`google`, ({ purest }) => async ({ query }) => {
      const google = purest({ provider: "google" });

      const res = await google
        .get("https://www.googleapis.com/oauth2/v3/userinfo")
        .auth(query.access_token)
        .request();

      const { body } = res;
        console.log('body', body)
      return {
        email: body.email,
        firstname: body.given_name,
        lastname: body.family_name,
        picture: body.picture,
        providerId: body.sub,
        provider: "google",
        username: body.name,
      };
    });
    userPermissionResgister.register(`facebook`, ({ purest }) => async ({ query }) => {
      const facebook = purest({ provider: "facebook" });
      const res =  await facebook
      .query()
      .get('me?fields=id,name,email,picture')
      .auth(query.access_token)
      .request();
  
      const { body } = res;
      let facebookEmail = body.email;
      if (!facebookEmail) {
        facebookEmail = body.id.concat('@facebook.com');
      }
      console.log('body', body)
      return {
        email: facebookEmail,
        firstname: body.given_name,
        lastname: body.family_name,
        picture: (body.picture?.data?.url ?? 'olmadi'),
        provider: "facebook",
        providerId: body.id,
        username: body.name,
      };
    });
  },
};
