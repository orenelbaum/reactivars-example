import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { babel } from "@rollup/plugin-babel"

export default defineConfig({
  plugins: [
    {
			...babel({
				plugins: [
					["@babel/plugin-syntax-typescript", { isTSX: true }],
					"babel-plugin-reactivars-solid",
				],
				extensions: [".tsx"]
			}),
			enforce: 'pre'
    },
    solidPlugin()
  ],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
  },
});
