module.exports = {
  target: "serverless",
  reactStrictMode: true,
  env: {
    gtag_id: process.env.GA_TRACKING_ID,
  },
};
