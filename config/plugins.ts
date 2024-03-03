export default () => ({
    "video-field":{
        enabled:true
    },
    ckeditor5: {
        enabled: true,
        resolve: "./src/plugins/strapi-plugin-ckeditor"
      },
      seo: {
        enabled: true,
      },
      navigation: {
        enabled: true,
        config: {
            //additionalFields: ['audience', { name: 'my_custom_field', type: 'boolean', label: 'My custom field' }],
            contentTypes: ['api::page.page'],
            contentTypesNameFields: {
                'api::page.page': ['title']
            },
            pathDefaultFields: {
                'api::page.page': ['slug']
            },
            allowedLevels: 2,
            //gql: {...},
        }
    }
});
