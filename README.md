# Sofast Extension Template

Sofast插件开发模板。

## 示例插件 Greet

1. 新增一个Vue组件，作为插件的主页即 [Greet.vue](./src/components/Greet.vue)
    ```vue
    <div class="w-full h-full grid place-items-center">
      <span class="text-stone-800">
        <span class="text-3xl font-bold">你好</span>，我是一个如快的插件！
      </span>
    </div> 
   ```
2. 在 `Sofast` 的插件系统中，一个 Vue 组件被视为一个 `Command`，它的入口文件的固定写法为导出一个 `() => App` 格式的函数
    ```typescript
    import Greet from "./components/Greet.vue";
    import './assets/index.css' // 这里导入一下 TailwindCSS 的 base.css 文件，不使用 TailwindCSS 请忽略，当然，这里建议使用 TailwindCSS 或者 Unocss 来提高开发效率
    import {createApp} from "vue";
    
    export default () => createApp(Greet)
    ```

3. 接下来，进入 `Sofast` 中导入插件（注意，`导入插件`是开发者模式，正式加载插件是`添加插件`）即可

   ![导入插件](./public/import-plugin.png)

   可以看到已经有了
   ![items](./public/plugin-items.png)

   现在打开看看
   ![greet](./public/greet.png)
   
