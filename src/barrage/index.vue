<template>
  <div class="act-barrage" ref="barragebox">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'act-barrage',
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
  data() {
    return {
      nowIndex: 0,
      dtimer: 0,
    };
  },
  created() {},
  mounted() {
    clearInterval(this.dtimer);
    this.dtimer = 0;
    if (this.list.length === 0) {
      return false;
    }
    this.dtimer = setInterval(() => {
      const el = this.$refs.barragebox.childNodes[this.nowIndex];
      el.classList.add('dmitem');
      el.style.animationDuration = `${this.speeds}ms`;
      el.addEventListener('animationend', () => {
        el.classList.remove('dmitem');
      });
      this.nowIndex += 1;
      if (this.nowIndex === this.list.length) {
        this.nowIndex = 0;
      }
    }, this.speeds - 2000);
  },
  unmounted() {
    clearInterval(this.dtimer);
  },
};
</script>

<style lang="scss" scoped>
.act-barrage {
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
    animation: ttAn 2s infinite linear;
    animation-iteration-count: 1;
    @keyframes ttAn {
      0% {
        transform: translate3d(7.5rem, 0, 0);
      }
      100% {
        transform: translate3d(-110%, 0, 0);
      }
    }
  }
}
</style>
