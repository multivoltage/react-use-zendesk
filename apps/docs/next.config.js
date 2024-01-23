const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

/** @type {import('next').NextConfig} */
module.exports = (phase, { defaultConfig }) => {
  return {
    reactStrictMode: false,
    output: "export",
    basePath: phase === PHASE_DEVELOPMENT_SERVER ? "" : "/react-use-zendesk",
  };
};
