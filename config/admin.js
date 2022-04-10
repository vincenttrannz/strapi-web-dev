module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd2bee21d91c1e5c45a0a978b2e119383'),
  },
});
