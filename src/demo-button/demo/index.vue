<template>
  <demo-section>
    <demo-block title="基础用法">
      <demo-button type="primary" style="margin-left: 15px">按钮</demo-button>
    </demo-block>

    <demo-block title="自定义颜色">
      <demo-button color="#03a9f4" style="margin-left: 15px">按钮</demo-button>
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
