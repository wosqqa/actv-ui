<template>
  <div class="nav-header">
    <div
      class="hbar"
      :style="`height:${barHeight};background: ${barBg};`"
    ></div>
    <div class="navbar" v-if="type == 'primary'">
      <div class="back" @click="goBack"></div>
      <div class="title">{{ title }}</div>
    </div>
    <div
      class="navbar"
      v-else-if="type == '2'"
      :style="`background: ${navBg};`"
    >
      <div class="back hback" @click="goBack"></div>
      <div class="title" :style="`color: ${color};`">{{ title }}</div>
    </div>
    <div class="navbar" v-else-if="type == '3'">
      <div class="menu">
        <div class="dd" @click="showTips = true">
          <span></span><span></span><span></span>
        </div>
        <img
          src="https://bddm.tt.cn/appfe/activities/images/actvui/dclose@2x.png"
          alt=""
          class="bkimg"
          @click="$store.dispatch('goBack', 3)"
        />
      </div>
    </div>
    <div class="navbar" v-else>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-header',
  props: {
    color: {
      type: String,
      default: 'rgba(255, 255, 255, 1)',
    },
    barBg: {
      type: String,
      default: 'rgba(255, 255, 255, 0)',
    },
    navBg: {
      type: String,
      default: 'rgba(255, 255, 255, 0)',
    },
    barHeight: {
      type: String,
      default: '0.6rem',
    },
    title: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'primary',
    },
  },
  methods: {
    goBack() {
      this.$emit('back');
    },
  },
};
</script>

<style lang="scss">
.nav-header {
  position: absolute;
  width: 100%;
  height: auto;
  top: 0;
  left: 0;
  z-index: 100;
  .navbar {
    width: 7.5rem;
    height: 0.88rem;
    position: relative;
  }
  .back {
    position: absolute;
    top: 0;
    left: 0;
    width: 0.88rem;
    height: 0.88rem;
    background-image: url('https://bddm.tt.cn/appfe/activities/images/actvui/back.png');
    background-position: center;
    background-size: 0.21rem 0.38rem;
    background-repeat: no-repeat;
  }
  .hback {
    background-image: url('https://bddm.tt.cn/appfe/activities/images/actvui/back-black.png');
    background-size: 0.44rem 0.44rem;
  }
  .title {
    font-size: 0.36rem;
    font-family: PingFang SC;
    color: #ffffff;
    line-height: 0.88rem;
    text-align: center;
  }
  .hbar {
    width: 7.5rem;
  }
  .menu {
    position: absolute;
    right: 0.25rem;
    top: 0.13rem;
    width: 1.6rem;
    height: 0.62rem;
    box-sizing: border-box;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 0.31rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.22rem;
    .dd {
      display: flex;
      align-items: center;
      border-right: 0.02rem solid #ffffff;
      width: 0.6rem;
      height: 0.34rem;
      span {
        display: inline-block;
        width: 0.08rem;
        height: 0.08rem;
        margin-right: 0.06rem;
        background: #ffffff;
        border-radius: 50%;
      }
    }
    .bkimg {
      width: 0.39rem;
      height: 0.4rem;
    }
  }
}
</style>
