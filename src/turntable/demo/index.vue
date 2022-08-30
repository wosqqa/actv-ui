<template>
  <demo-section>
    <demo-block title="基础用法">
      <turntable type="primary" :ring="ring" :index="index" :time="time">
        <template v-slot:btn
          ><img
            src="https://bddm.tt.cn/appfe/activities/img/cs-btn.d77b00ac.png"
            alt=""
        /></template>
      </turntable>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  name: 'turntable-demo',
  data() {
    return {
      giftNum: 8,
      index: 4,
      ring: 8,
      time: 6000,
    };
  },
  methods: {
    startTurntable() {
      this.startTurnAnmit();
    },
    startTurnAnmit(type) {
      const _this = this;
      let rotateTurn = 0;
      rotateTurn = this.ring * 360 + 157.5;
      document.body.style.setProperty('--rotateTurn', rotateTurn);
      document.body.style.setProperty('--rotateTime', rotateTurn);
      _this.startAnmi = true;
      setTimeout(() => {
        // _this.startAnmi = false;
      }, 4500);
    },
  },
};
</script>
