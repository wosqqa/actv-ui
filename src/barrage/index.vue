<template>
  <div class="act-barrage" ref="barragebox">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Barrage',
  props: {
    speeds: {
      type: Number,
      default: 5000,
    },
    list: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss">
.act-barrage {
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: auto;
  .dmitem {
    position: absolute;
    left: 0;
    top: 0;
    width: auto;
    height: auto;
    display: flex;
    transform: translate3d(-7.5rem, 0, 0);
    animation: ttbarrageAn 2s infinite linear;
    animation-iteration-count: 1;
    @keyframes ttbarrageAn {
      0% {
        transform: translate3d(0rem, 0, 0);
      }
      100% {
        transform: translate3d(calc(-100% - 7.5rem), 0, 0);
      }
    }
  }
}
</style>
