import { build } from 'esbuild';
import linaria from '@linaria/esbuild';

const { dependencies } = require('./package.json');
const isProduction = process.env.NODE_ENV === 'production';
const isWatch = process.env.WATCH === 'true';

const shared = {
  bundle: true,
  entryPoints: ['src/index.ts'],
  external: Object.keys(dependencies),
  minify: isProduction,
  plugins: [
    linaria({
      sourceMap: isProduction,
    }),
  ],
  sourcemap: isProduction,
  watch: isWatch && {
    onRebuild(error: any, result: any) {
      if (error) {
        console.error('watch build failed:', error);
      } else {
        console.log('watch build succeeded:', result);
      }
    },
  },
};

build({
  ...shared,
  format: 'esm',
  outfile: './build/index.esm.js',
  target: ['es6'],
});

build({
  ...shared,
  format: 'cjs',
  outdir: './build',
  target: ['es6'],
});
