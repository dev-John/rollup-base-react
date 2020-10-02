import { terser } from 'rollup-plugin-terser';
import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";

// const production = !process.env.ROLLUP_WATCH;

const plugins = [
  resolve(),
  babel({
    exclude: 'node_modules/**'
  }),
];

const prodPlugins = plugins.concat(terser());

export default [
  {
    input: 'src/index.js',
    external: ['react'],
    plugins,
	  output: 
		{
      file: 'dist/bundle.js',
      globals: {
        react: 'React'
      },
			format: 'umd',
      name: 'rollup-base-react',
    },
  },
  {
    input: 'src/index.js',
    external: ['react'],
    plugins: prodPlugins,
	  output: 
		{
      file: 'dist/bundle.min.js',
      globals: {
        react: 'React'
      },
			format: 'umd',
      name: 'rollup-base-react',
    },
  },
]