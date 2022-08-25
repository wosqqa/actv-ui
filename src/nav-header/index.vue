<template>
  <div class="nav-header">
    <div
      class="hbar"
      :style="`height:${barHeight};background: ${barBg};`"
    ></div>
    <div class="hrbg"></div>
    <div class="navbar" v-if="type == 'primary'">
      <div class="back"></div>
      <div class="title">{{ title }}</div>
    </div>
    <div
      class="navbar"
      v-else-if="type == '2'"
      :style="`background: ${navBg};`"
    >
      <div class="back hback"></div>
      <div class="title" :style="`color: ${color};`">{{ title }}</div>
    </div>
    <div class="navbar" v-else-if="type == '3'">
      <div class="back hback"></div>
      <div class="title">{{ title }}</div>
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
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAmCAYAAAAr+dCVAAAAuklEQVRIibXWsQpCMQyF4eKr3e26KTj64N7VxUcQhN9BiyK2TdKTQKbCV0pDkgIUQa7A5Z2LAjwAdz5xVYMANzX4AE5q8AwUORhBh6AXNYEe1AxaURdoQd3gCD1GwB4aBlvoFPgPnQZ/UQn4jcrAiu6VYEU3JQiUXcmIrOenfFRaSaUVvwxuHcgbyjQ8ulXepMOw9Uflg88Nu4raCntRExxBh3AU7cHhVbIHTy29LXh6Pa+58hpLG7A8Aeoy18udPCJZAAAAAElFTkSuQmCC');
    background-position: center;
    background-size: 0.21rem 0.38rem;
    background-repeat: no-repeat;
  }
  .hback {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAABeklEQVRYR+3ZS0oEMRAG4L9A5xAiQsrjiCtdDYK49y4eQnzgQlx7FruyEPEUYyQwSiPTM5NHVTJgbzud/qiupioJYccu2jEv/sGbvphz7pSIbgB8hRCuvfevm54Z3zeNsHPunIjuAewvER8ictgleAU2Oj9F5KA78AR2EUKYe++fugJPYQFcishdCjaOVc3h2lhVsAZWDayFVQFrYquDtbFVwRbYamArbBWwJbYYbI0tAi+xDwD2RtVqkVvBtq14WZWuFTYrwi2xyWBmPgHwYp0G2Q08MwsAZ5mzf3M7KYeZ+Q3A8RgcQrjy3t9u+9OUjksFx5R4BjBrhU4CRyQznwGI67Im6GRwa3QWuCU6G9wKXQRugS4GW6OrgC3R1cBjdAhhRvQ7ddwwqVZcqoItIl0drI1WAWui1cBaaFWwBlodvA5NRBfDMDymtJwm4DXoPje0fyK4ojV9F5GjLiM8QsdFQDyUQfeHMimRnBprlsM1sMnL/FovLZnnG0MmGDx0WHv+AAAAAElFTkSuQmCC');
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
}
</style>
