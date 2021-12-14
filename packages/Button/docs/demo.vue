<template>
  <div>
    <yak-button @click="onClick(1)">第一个</yak-button>
    <yak-button @click="onClick(2)">第二个</yak-button>
    <yak-button @click="onClick(3)">第三个</yak-button>
  </div>
</template>

<script setup lang="ts">
const onClick = (num: number) => {
  console.log(`我是第 ${num} 个自定义按钮`);
};
</script>
