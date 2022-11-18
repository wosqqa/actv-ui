<template>
  <div :class="{ 'act-button': true }">
    <slot />
  </div>
</template>

<script>
!(function (doc, win) {
  var docEl = doc.documentElement;
  var resizeEvt =
    'orientationchange' in window ? 'orientationchange' : 'resize';
  var recalc = function () {
    var clientWidth = docEl.clientWidth;
    var MAX_WIDTH = 750; // 设计稿宽度为750px，html设置字体大小100px，设计稿上30px相当于页面上0.3rem；
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
export default {
  name: 'act-button',
  props: {
    color: String,
    type: {
      type: String,
      default: 'a',
    },
  },
};
</script>

<style lang="scss">
.act-button {
  width: 6.9rem;
  height: 0.98rem;
  background: linear-gradient(90deg, #ffa6b6 0%, #fed2bb 100%);
  border-radius: 0.64rem;
  opacity: 1;
  font-size: 0.34rem;
  font-family: PingFang SC-粗体, PingFang SC;
  font-weight: normal;
  color: #0b1355;
  line-height: 0.98rem;
  text-align: center;
}
</style>
