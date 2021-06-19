module.exports = {
  target: "serverless",
  reactStrictMode: true,
  env: {
    GA_TRACKING_ID: process.env.GA_TRACKING_ID,
  },
};
