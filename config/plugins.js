module.exports = ({ env }) => ({
  upload: {
    config: {
      sizeLimit: 100 * 1024 * 1024, // 100mb in bytes
      provider: "local",
      providerOptions: {},
    },
  },
});
