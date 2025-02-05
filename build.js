const esbuild = require("esbuild");

esbuild
    .build({
        entryPoints: ["./src/index.ts"],
        bundle: true,
        outfile: "./dist/index.js",
        sourcemap: true,
        minify: true,
        target: "esnext",
    })
    .catch(() => process.exit(1));
