import type { Options } from "tsup";

export const tsup: Options = {
  entry: ["src/index.ts"],
  format: ["esm"],
  external: ["react"],
  sourcemap: true,
  treeshake: true,
  clean: true,
  splitting: false,
  dts: true,
  // minify: true, => put true when library is ready
  target: "es2017",
};
