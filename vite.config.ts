import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { glob } from 'glob';
import path from 'path';
import { readFileSync, writeFileSync } from "node:fs";
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

const getEntryPoints = () => {
  const entries: { [key: string]: string } = {};
  const files = glob.sync('src/*.ts');

  files.forEach((file) => {
    const name = path.parse(file).name;
    entries[name] = file;
  });

  return entries;
};

export default defineConfig({
  plugins: [
    vue(),

    cssInjectedByJsPlugin(),

    {
      name: 'copy-package-json',
      writeBundle() {
        const packageJson = readFileSync('package.json', 'utf-8');
        const distPath = path.resolve(__dirname, 'dist');
        writeFileSync(path.join(distPath, 'package.json'), packageJson);
      },
    },
  ],
  build: {
    lib: {
      entry: getEntryPoints(),
      formats: ['es'],
    },
    rollupOptions: {
      output: {
        entryFileNames: '[name].js',
      },
    },
  },
});
