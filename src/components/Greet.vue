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
import {watchSearchContent} from "sofast-extensions";

const output = ref('')

onMounted(() => {
  watchSearchContent(v => {
    output.value = v
  })
})
</script>
