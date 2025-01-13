<template>
  <div class="pointer-events-auto w-full h-full grid place-items-center text-stone-800">
    <span class="text-stone-800">
      <span class="text-3xl font-bold">Hello!</span> I'm a Sofast extension!
    </span>
    <button @click="handlerClick" class="px-6 py-2 rounded-md bg-stone-800 hover:bg-stone-600 transition text-white">Click Me!</button>
  </div>
</template>

<script setup lang="ts">
import {showDialog} from "sofast-extensions";

const handlerClick = () => {
  showDialog({
    title: `你也要跟我打招呼吗？`,
    subtitle: '警告：你将会跟我打招呼',
    buttons: [
      {
        text: '诶嘿嘿',
        type: 'shallow'
      },
      {
        text: '想多了',
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
</script>
