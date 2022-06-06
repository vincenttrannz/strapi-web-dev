module.exports = ({ env }) => ({
  wysiwyg: {
    enabled: true,
    resolve: "./src/plugins/wysiwyg", // path to plugin folder
  },
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'nz.vincent.tran@gmail.com',
        defaultReplyTo: 'nz.vincent.tran@gmail.com',
      },
    },
  },
});
