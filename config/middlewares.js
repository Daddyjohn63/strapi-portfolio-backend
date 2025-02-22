module.exports = [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      headers: "*",
      origin:
        process.env.NODE_ENV === "development"
          ? ["http://localhost:3000"]
          : ["https://webandprosper.co.uk", "https://www.webandprosper.co.uk"],
    },
  },
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
