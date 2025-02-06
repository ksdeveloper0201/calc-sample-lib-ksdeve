const esbuild = require("esbuild");

esbuild
    .build({
        entryPoints: ["./src/index.ts"],
        bundle: true,
        outdir: "dist",
        sourcemap: true,
        target: "esnext",
        minify: true,
        format: "esm",
    })
    .catch(() => process.exit(1));
