import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
// import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
// import ts from '@wessberg/rollup-plugin-ts';
import postcss from 'rollup-plugin-postcss';
import pkg from './package.json';

export default {
  input: {
    main: './src/index.js', // ts
    select: './src/Select/index.js', // ts
    common: './src/common/index.js' // ts
  },

  output: [
    // ES module version, for modern browsers
    {
      name: '@table-library/react-table-library',
      dir: `${__dirname}/lib`,
      format: 'es',
      sourcemap: true,
      entryFileNames: '[name].js'
      // preserveModules: true,
    }
    // SystemJS version, for older browsers
    // {
    //   dir: `${__dirname}/lib/nomodule`,
    //   format: 'system',
    //   sourcemap: true,
    // },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ],
  plugins: [
    peerDepsExternal(),
    postcss({
      modules: true
    }),
    resolve({
      browser: true
    }),
    commonjs({
      sourceMap: true,
      exclude: 'src/**'
    }),
    // ts({
    //   transpiler: 'babel'
    // }),

    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**'
    }),
    // typescript({ sourceMap: true }),
    terser({
      module: true
    })
  ]
};
