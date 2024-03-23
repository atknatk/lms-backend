export default ({env}) => ({
    "video-field":{
        enabled:true
    },
      seo: {
        enabled: true,
      },
      navigation: {
        enabled: true,
        config: {
            //additionalFields: ['audiencew', { name: 'my_custom_field', type: 'boolean', label: 'My custom field' }],
            contentTypes: ['api::page.page'],
            contentTypesNameFields: {
                'api::page.page': ['title']
            },
            pathDefaultFields: {
                'api::page.page': ['slug']
            },
            allowedLevels: 2,
        }
    },
    upload: {
        config: {
          provider: 'aws-s3',
          providerOptions: {
            //baseUrl: env('CDN_URL'),
            //rootPath: env('CDN_ROOT_PATH'),
            s3Options: {
              accessKeyId: env('AWS_ACCESS_KEY_ID'),
              secretAccessKey: env('AWS_ACCESS_SECRET'),
              region: env('AWS_REGION'),
              params: {
                ACL: env('AWS_ACL', 'public-read'),
                signedUrlExpires: env('AWS_SIGNED_URL_EXPIRES', 15 * 60),
                Bucket: env('AWS_BUCKET'),
              },
            },
          },
          actionOptions: {
            upload: {},
            uploadStream: {},
            delete: {},
          },
        },
      },
});
