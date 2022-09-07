module.exports = ({ env }) => ({
  //...
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {
          folder: env("CLOUDINARY_FOLDER"),
        },
        delete: {},
      },
    },
  },
  comments: {
    relatedContentTypes: {
      posts: {
        contentManager: true,
        isSingle: true,
        key: "title",
        value: "id",
      },
    },
    enabled: true,
    config: {
      enabledCollections: ["api::post.post"],
      badWords: false,
      moderatorRoles: ["Authenticated"],
      approvalFlow: ["api::post.post"],
      entryLabel: {
        "*": ["Title", "title", "Name", "name", "Subject", "subject"],
        "api::post.post": ["MyField"],
      },
      reportReasons: {
        MY_CUSTOM_REASON: "MY_CUSTOM_REASON",
      },
      gql: {
        // ...
      },
    },
  },
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
        introspection: true,
      },
    },
  },
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'smtp.gmail.com'),
        port: env('SMTP_PORT', 465),
        auth: {
          user: env('GMAIL_USER'),
          pass: env('GMAIL_PASSWORD'),
        },
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: 'threepointo.dev@gmail.com',
        defaultReplyTo: 'threepointo.dev@gmail.com',
      },
    },
  },
});
