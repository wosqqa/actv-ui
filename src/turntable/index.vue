<template>
  <div class="nbox">
    <img
      src="https://bddm.tt.cn/appfe/activities/img/waiquan.544f4667.png"
      class="wqbox"
      id="wqbox"
    />
    <div class="wqbox" id="wqbox"><slot name="boxbg"></slot></div>
    <div
      :style="`transform: rotate(${rotateTurn}deg) translateZ(0);`"
      :class="`${startAnmi ? 'nqbox nqboxd' : 'nqbox'}`"
      id="nqbox"
    >
      <slot name="disk"></slot>
    </div>
    <img
      src="https://bddm.tt.cn/appfe/activities/img/neiquan.04930420.png"
      alt=""
      :style="`transform: rotate(${rotateTurn}deg) translateZ(0);`"
      :class="`${startAnmi ? 'nqbox nqboxd' : 'nqbox'}`"
      id="nqbox"
    />
    <div class="cjbtn" @click="startTurntable()">
      <slot name="btn"></slot>
    </div>
    />
  </div>
</template>

<script>
export default {
  name: 'turntable',
  props: {
    time: {
      type: Number,
      default: 4500,
    },
    giftNum: {
      type: Number,
      default: 8,
    },
    index: {
      type: Number,
      default: 0,
    },
    ring: {
      type: Number,
      default: 5,
    },
  },
  data() {
    return {
      rotateTurn: 0,
      startAnmi: false,
    };
  },
  methods: {
    startTurntable() {
      if (!this.startAnmi) {
        this.rotateTurn = 0;
        this.startTurnAnmit();
      }
    },
    startTurnAnmit() {
      const _this = this;
      let rotateTurn = 0;
      const perNum = 360 / this.giftNum;
      rotateTurn = this.ring * 360 + (360 - perNum * this.index - perNum / 2);
      console.log('旋转度数', rotateTurn, perNum, this.time / 1000);
      document.body.style.setProperty('--rotateTurn', rotateTurn);
      document.body.style.setProperty('--rotateTime', this.time / 1000);
      _this.startAnmi = true;
      setTimeout(() => {
        this.rotateTurn = rotateTurn;
        _this.startAnmi = false;
      }, this.time);
    },
  },
};
</script>

<style lang="scss">
.nbox {
  position: relative;
  width: 7.5rem;
  height: 8rem;
  .wqbox {
    position: absolute;
    top: 0;
    left: 0.34rem;
    width: 6.82rem;
    height: 8rem;
    z-index: 20;
  }
  .nqboxd {
    animation: nqAn calc(var(--rotateTime) * 1s) 1 ease-in-out;
    @keyframes nqAn {
      0% {
        transform: rotate(0deg) translate3d(0, 0, 0);
      }
      90% {
        transform: rotate(calc(var(--rotateTurn) * 1deg)) translate3d(0, 0, 0);
      }
      100% {
        transform: rotate(calc(var(--rotateTurn) * 1deg)) translate3d(0, 0, 0);
      }
    }
  }
  .nqbox {
    position: absolute;
    top: 0.75rem;
    left: 0.96rem;
    width: 5.58rem;
    height: 5.58rem;
    z-index: 22;
  }
  .cjbtn {
    position: absolute;
    top: 2.25rem;
    left: 2.82rem;
    width: 1.88rem;
    height: 2.18rem;
    z-index: 22;
    animation: btnhx 1s infinite linear;
    @keyframes btnhx {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(0.95);
      }
      100% {
        transform: scale(1);
      }
    }
  }
}
</style>
