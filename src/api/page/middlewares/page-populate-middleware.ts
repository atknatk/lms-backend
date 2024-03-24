"use strict";

/**
 * `page-populate-middleware` middleware
 */

const populate = {
  contentSections: {
    populate: {
      hero: {
        populate: true,
      },
      mediaOne: {
        fields: ["url", "alternativeText", "caption", "width", "height"],
      },
      mediaTwo: {
        fields: ["url", "alternativeText", "caption", "width", "height"],
      },
      mediaThree: {
        fields: ["url", "alternativeText", "caption", "width", "height"],
      },

      masterLinks: {
        populate: true,
      },
      heroImage: {
        populate: true,
      },
      featureIconList: {
        populate: {
          fields: ['id', 'text'],
          image: {
            populate: true,
          }
        },
      },
      // buttons: {
      //   populate: true,
      // },
      // feature: {
      //   populate: {
      //     fields: ["title", "description", "showLink", "newTab", "url", "text"],
      //     media: {
      //       fields: ["url", "alternativeText", "caption", "width", "height"],
      //     },
      //   },
      // },
      // testimonials: {
      //   populate: {
      //     picture: {
      //       fields: ["url", "alternativeText", "caption", "width", "height"],
      //     },
      //   },
      // },
      testimonials: {
        populate: true
      },
      counters: {
        populate: true
      },
      plans: {
        //populate: true//["product_features", "image"],
        populate: {
          product_features: true,
          image: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          }
        }
      },
      // submitButton: {
      //   populate: true,
      // },
    },
  },
  seo: {
    fields: ["metaTitle", "metaDescription"],
    populate: { shareImage: true },
  }
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query = {
      populate,
      filters: { slug: ctx.query.filters.slug },
      locale: ctx.query.locale,
    };

    console.log("page-populate-middleware.ts: ctx.query = ", ctx.query);

    await next();
  };
};
