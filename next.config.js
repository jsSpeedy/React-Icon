module.exports = {
  //output: "export",
  // reactStrictMode: true,
  i18n: {
    locales: ["en", "tr"],
    defaultLocale: "en",
    localeDetection: false, //tarayıcının önerdiği dili kapatmış oluyoruz.
  },
  trailingSlash: true,
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
