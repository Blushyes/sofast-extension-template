# Sofast Extension Template

Sofast插件开发模板。

## 示例插件 Greet

1. 新增一个Vue组件，作为插件的主页即 [Greet.vue](./src/components/Greet.vue)
    ```html
    <div class="w-full h-full grid place-items-center">
      <span class="text-stone-800">
        <span class="text-3xl font-bold">你好</span>，我是一个如快的插件！
      </span>
    </div> 
   ```
1. 在 `Sofast` 的插件系统中，一个 Vue 组件被视为一个 `Command`，它的入口文件的固定写法为导出一个 `() => App` 格式的函数
    ```typescript
    import Greet from "./components/Greet.vue";
    import './assets/index.css' // 这里导入一下 TailwindCSS 的 base.css 文件，不使用 TailwindCSS 请忽略，当然，这里建议使用 TailwindCSS 或者 Unocss 来提高开发效率
    import {createApp} from "vue";
    
    export default () => createApp(Greet)
    ```

1. 配置 `package.json` 文件，`Sofast` 需要用到的字段有：
   ```json
   {
     "title": "Sofast Extension Template",
     "author": "Blushyes",
      "commands": [
       {
         "name": "greet",
         "title": "打个招呼",
         "search": true,
         "placeholder": "输入你打招呼的内容"
       },
       {
         "name": "sayHello",
         "title": "Say Hello"
       },
       {
         "name": "nihao",
         "title": "你好",
         "type": "background"
       }
     ],
     "description": "A template for creating a Sofast extension",
     "categroies": [
       "template"
     ]
   }
   ```
   其中，`commands` 是最重要的字段，声明了你这个插件需要注册的所有指令，`name` 字段为这个指令在 `src` 目录下对应的文件名，比如 `name` 为 `sayHello` 时，指令对应的文件为 `src/sayHello.ts`
   
   其他字段说明待完善

1. 接下来运行 `npm run build` 构建项目

1. 得到的 `dist` 文件夹即为我们的插件文件夹，打包成 zip 即可发布

1. 接下来，进入 `Sofast` 中导入插件（注意，`导入插件` 是开发者模式，正式加载插件是 `添加插件`）即可

   ![导入插件](./public/import-plugin.png)

   可以看到已经有了
   ![items](./public/plugin-items.png)

   现在打开看看
   ![greet](./public/greet.png)

## 后台指令（暂时下线）

当您将某个 `command` 的 `type` 设置为 `background` 时，这个 `command` 将不会在指令列表中显示，而是作为后台指令运行。

```json
{
  "name": "nihao",
  "title": "你好",
  "type": "background"
}
```

目前，后台指令运行的时机仅为如快启动时，后续会增加更多运行时机。

## 插件列表

- [快捷链接导出插件](https://github.com/Blushyes/sofast-quicklinks-export)

## 相关链接

- [使用 Tauri API 示例](https://github.com/Blushyes/sofast-tauri-api-use-example)
