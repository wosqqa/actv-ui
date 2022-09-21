<template>
  <div class="act-countdown" ref="timebox">
    <slot name="time" :timeObj="timeObj"></slot>
  </div>
</template>
<script>
export default {
  name: 'act-countdown',
  props: {
    dtime: {
      type: Number,
      default: 60,
    },
  },
  data() {
    return {
      timeObj: '',
      dtimer: 0,
    };
  },
  watch: {
    dtime: {
      handler(n) {
        console.log('改变', n);
        if (n > 0) {
          this.getTime();
        }
      },
      immediate: true,
    },
  },
  methods: {
    getTime() {
      let t = this.dtime;
      if (this.dtimer != null) {
        clearInterval(this.dtimer);
      }
      const timer = setInterval(() => {
        if (t >= 0) {
          let d = Math.floor(t / 60 / 60 / 24); // 天 var d=Math.floor(t/1000/60/60/24)
          let h = Math.floor((t / 60 / 60) % 24); // 时 var h=Math.floor(t/1000/60/60%24)
          let m = Math.floor((t / 60) % 60); // 分 var m=Math.floor(t/1000/60%60)
          let s = Math.floor(t % 60); // 秒 var s=Math.floor(t/1000%60)
          if (d < 10) {
            d = '0' + d;
          }
          if (h < 10) {
            h = '0' + h;
          }
          if (m < 10) {
            m = '0' + m;
          }
          if (s < 10) {
            s = '0' + s;
          }
          this.timeObj = { d, h, m, s };
          t--;
        } else {
          clearInterval(timer);
          this.$emit('timingEnd');
        }
      }, 1000);
      this.dtimer = timer;
    },
  },
};
</script>

<style lang="scss" scoped>
.act-countdown {
}
</style>
