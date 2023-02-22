<template>
  <demo-block title="基础用法">
    <act-switch type="primary" style="margin-left: 15px">按钮</act-switch>
  </demo-block>

  <demo-block title="自定义颜色">
    <act-switch color="#03a9f4" style="margin-left: 15px">{{ txt }}</act-switch>
  </demo-block>
</template>

<script setup>
import ActSwitch from '../index.vue';

const txt = '我是Switch';
</script>
