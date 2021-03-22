module.exports = {
  async redirects() {
    return [
      {
        source: "/instagram",
        destination: "https://www.instagram.com/juliowernermm/",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/julio-werner/",
        permanent: true,
      },
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/in/julio-werner/",
        permanent: true,
      },
    ];
  },
};
