const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

/** @type {import('next').NextConfig} */
module.exports = (phase, { defaultConfig }) => {
  return {
    reactStrictMode: false,
    output: "export",
    basePath: process.env.NODE_ENV === "production" ? "/nome-del-tuo-repo" : "",
    assetPrefix:
      process.env.NODE_ENV === "production" ? "/nome-del-tuo-repo/" : "",
  };
};
