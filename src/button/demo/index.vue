<template>
  <demo-block title="基础用法">
    <btn1>哈哈哈</btn1>
    <img src="https://wosqqa.github.io/actv-ui/img/head.png" alt="" srcset="">
    <img src="https://wosqqa.github.io/actv-ui/img/xqbtn.png" alt="" srcset="">
  </demo-block>

  <demo-block title="自定义颜色">
    <act-button
      style="
        margin-left: 15px;
        background: linear-gradient(90deg, #ffa6b6 0%, #fed2bb 100%);
      "
      :loading="5000"
      :breathing="true"
      @click="getChildClick"
      >{{ txt }}</act-button
    >
    <act-button loading="1000" class="btn1">{{ txt }}</act-button>
  </demo-block>
</template>

<script setup>
import ActButton from '../index.vue';
import btn1 from './btn1.vue';

!(function (doc, win) {
  const docEl = doc.documentElement;
  const resizeEvt =
    'orientationchange' in window ? 'orientationchange' : 'resize';
  const recalc = function () {
    const { clientWidth } = docEl;
    const MAX_WIDTH = 750; // 设计稿宽度为750px，html设置字体大小100px，设计稿上30px相当于页面上0.3rem；
    if (!clientWidth) {
      return;
    }
    if (clientWidth >= MAX_WIDTH) {
      docEl.style.fontSize = '100px';
    } else {
      docEl.style.fontSize = 100 * (clientWidth / MAX_WIDTH) + 'px';
    }
  };
  recalc();
  if (!doc.addEventListener) {
    return;
  }
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

const txt = '我是测试的';
const getChildClick = (e) => {
  // 接收父组件传递过来的数据
  console.log('点击按钮', e); // child value
};
</script>
<style lang="scss">
.act-button {
  width: 2.9rem;
  height: 0.8rem;
  line-height: 0.8rem;
  border-radius: 0.5rem;
  border: 1px solid rgb(76, 143, 243);
}
.btn1 {
  margin-left: 15px;
  margin-top: 15px;
  border-radius: 0.15rem;
  border: 1px solid red;
}
</style>
