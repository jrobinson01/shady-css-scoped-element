import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: ['src/shady-css-scoped-element.js'],
    output: {
      file: 'shady-css-scoped-element.min.js',
      format: 'esm'
    },
    plugins: [
      resolve(),
      babel({
        presets: [
          [
            '@babel/preset-env',
            {
              useBuiltIns: false,
              modules: false,
              targets: {
                browsers: '> 1%, IE 11, not dead'
              }
            }
          ]
        ]
      }),
      terser()
    ]
  }
];
