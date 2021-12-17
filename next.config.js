const path = require("path");
module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: [
      "www.tripadvisor.com",
      "no.tripadvisor.com",
      "saigonexpress.no",
      "picsum.photos",
    ],
  },
  webpack(config, { dev }) {
    if (dev) {
      config.devtool = "cheap-module-source-map";
    }
    return config;
  },
};
