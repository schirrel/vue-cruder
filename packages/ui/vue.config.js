module.exports = (args) => {
  console.log(process.env);
  return {
    outputDir:
      process.env.NODE_ENV === "production"
        ? "./dist"
        : "../docs/docs/public/demo",
  };
};
