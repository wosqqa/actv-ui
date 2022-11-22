<template>
  <demo-block title="基础用法">
    <act-barrage :speeds="4000" :list="txtArr">
      <div class="btxt" v-for="(item, index) in txtArr" :key="'sll' + index">
        {{ item }}
      </div>
    </act-barrage>
  </demo-block>

  <demo-block title="自定义颜色"> </demo-block>
</template>

<script setup>
import ActBarrage from '../index.vue';

const txtArr = [
  '芳心纵火犯刚刚领到了白银礼包，额外获得200金币',
  '额外获得200金币',
  '芳心纵火犯获得200金币',
  '白银礼包200金币',
  '刚刚领到了白银礼包获得200金币',
];
</script>
