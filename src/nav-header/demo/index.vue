<template>
  <demo-section style="background: #afddff">
    <demo-block title="默认用法">
      <div style="position: relative; height: 1.5rem">
        <act-header title="默认透明" @back="goBack"> </act-header>
      </div>
      <div style="position: relative; height: 1.5rem">
        <act-header
          type="2"
          nav-bg="#B4EA9B"
          title="背景颜色"
          bar-bg="#9eb8ec"
          @back="goBack"
        >
        </act-header>
      </div>
      <div style="position: relative; height: 1.5rem">
        <act-header
          type="2"
          nav-bg="#ffffff"
          title="字体颜色"
          bar-bg="#e1e1e1"
          color="#222222"
          @back="goBack"
        >
        </act-header>
      </div>
      <div style="position: relative; height: 1.5rem">
        <act-header
          type="3"
          nav-bg="#ffffff"
          title="字体颜色"
          bar-bg="#e1e1e1"
          color="#222222"
          @back="goBack"
        >
        </act-header>
      </div>
      <div style="position: relative; height: 1.5rem">
        <act-header type="4">
          <img
            class="left"
            src="https://bddm.tt.cn/appfe/activities/images/actvui/backb.png"
            alt=""
            srcset=""
          />
          <div class="title">自定义标题</div>
          <div class="right">规则</div>
        </act-header>
      </div>
    </demo-block>
  </demo-section>
</template>
<script>
export default {
  name: 'header-demo',
  methods: {
    goBack() {
      console.log('返回事件');
    },
  },
};
</script>
<style lang="scss">
.content {
  height: 180px;
  background-color: rgb(38, 144, 231);
}
.left {
  position: absolute;
  top: 0.14rem;
  left: 0.5rem;
  width: 0.6rem;
  height: 0.6rem;
}
.right {
  position: absolute;
  top: 0;
  right: 0;
  width: 1rem;
  height: 0.88rem;
  line-height: 0.88rem;
}
</style>
