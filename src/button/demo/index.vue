<template>
  <demo-block title="基础用法">
    <act-button type="primary" style="margin-left: 15px">按钮</act-button>
  </demo-block>

  <demo-block title="自定义颜色">
    <act-button color="#03a9f4" style="margin-left: 15px">{{ txt }}</act-button>
  </demo-block>
</template>

<script setup>
const txt = '我是测试的';
</script>
<style lang="scss">
.act-button {
  width: 2.9rem;
  height: 0.8rem;
  line-height: 0.8rem;
  border-radius: 0.5rem;
}
</style>
