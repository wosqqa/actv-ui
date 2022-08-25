<template>
  <demo-section style="background: #afddff">
    <demo-block title="默认用法">
      <div style="position: relative; height: 1.5rem">
        <nav-header type="primary" title="默认透明"> </nav-header>
      </div>
      <div style="position: relative; height: 1.5rem">
        <nav-header type="2" nav-bg="#B4EA9B" title="背景颜色" bar-bg="#9eb8ec">
        </nav-header>
      </div>
      <div style="position: relative; height: 1.5rem">
        <nav-header
          type="2"
          nav-bg="#ffffff"
          title="字体颜色"
          bar-bg="#e1e1e1"
          color="#222222"
        >
        </nav-header>
      </div>
    </demo-block>
  </demo-section>
</template>
<script>
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
</script>
<style lang="scss">
.content {
  height: 180px;
  background-color: rgb(38, 144, 231);
}
</style>
