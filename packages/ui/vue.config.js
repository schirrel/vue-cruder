const demoConfig = {
  publicPath: "/vue-cruder/demo/",
  outputDir: "../docs/docs/public/demo",
};

const libConfig = {
  outputDir: "./dist",
};

module.exports = () => {
  return process.env.NODE_ENV === "production" ? libConfig : demoConfig;
};
