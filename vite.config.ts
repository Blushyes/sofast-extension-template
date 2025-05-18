import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import {glob} from 'glob';
import path from 'path';
import {readFileSync, writeFileSync} from "node:fs";

// 读取 package.json
const packageJson = JSON.parse(readFileSync('package.json', 'utf-8'));

const getEntryPoints = () => {
  const entries: { [key: string]: string } = {};
  const files = glob.sync('src/*.ts');

  files.forEach((file) => {
    const name = path.parse(file).name;
    // 检查该文件是否在 commands 中定义
    const command = packageJson.commands.find((cmd: any) => cmd.name === name);
    if (command) {
      entries[name] = file;
    }
  });

  return entries;
};

export default defineConfig({
  plugins: [
    vue(),
    // cssInjectedByJsPlugin(),
    // initSofastContext(),
    {
      name: 'copy-package-json',
      writeBundle() {
        const distPath = path.resolve(__dirname, 'dist');
        writeFileSync(path.join(distPath, 'package.json'), JSON.stringify(packageJson, null, 2));
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
