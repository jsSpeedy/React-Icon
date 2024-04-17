module.exports = {
  //output: "export",
  // reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media.amazon.com",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};
