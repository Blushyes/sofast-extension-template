<template>
  <div class="w-full h-full grid place-items-center">
    <span class="text-stone-800">
      <span class="text-3xl font-bold">你好</span>，我是一个如快的插件！<br><br>
      <span class="text-stone-800">当前搜索内容：</span>
      <span class="text-stone-800 font-bold">{{ output }}</span>
    </span>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {listenEvent, showDialog, watchSearchContent} from "sofast-extensions";

const output = ref('')

onMounted(() => {
  listenEvent('keydown', (e) => {
    console.log('e:', e)
    if (e.key === 'Enter') {
      showDialog({
        title: `一起来打个招呼吧？`,
        subtitle: '为什么要打招呼',
        buttons: [
          {
            text: '不知道',
            type: 'shallow'
          },
          {
            text: '我就不',
            type: 'delete',
            onClick: () => {
              (async () => {
                console.log('是的')
              })()
            }
          }
        ]
      })
    }
  })
  watchSearchContent(v => {
    output.value = v
  })
})
</script>
