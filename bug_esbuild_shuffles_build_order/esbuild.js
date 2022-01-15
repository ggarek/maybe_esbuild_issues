require('esbuild')
  .build({
    entryPoints: ['app.js'],
    bundle: true,
    outfile: 'build/app.out.esbuild.js',
  })
  .catch(() => process.exit(1));


