require('esbuild')
  .build({
    entryPoints: ['app.js'], // originally was .tsx
    bundle: true,
    outfile: 'app.out.js',
    // minify: true,
    target: 'esnext',
  })
  .catch(() => process.exit(1));


