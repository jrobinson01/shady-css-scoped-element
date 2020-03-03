import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: ['src/shady-css-scoped-element.js'],
    output: {
      file: 'shady-css-scoped-element.min.js',
      format: 'iife'
    },
    plugins: [
      babel({
        presets: [
          [
            '@babel/preset-env',
            {
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
