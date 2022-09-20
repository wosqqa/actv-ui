<template>
  <demo-section>
    <demo-block title="基础用法">
      <act-turntable
        type="primary"
        :ring="ring"
        :index="index"
        :time="time"
        @turnEnd="aniEnd"
      >
        <template v-slot:boxbg
          ><img
            src="https://bddm.tt.cn/appfe/activities/img/waiquan.544f4667.png"
            alt=""
        /></template>
        <template v-slot:disk
          ><img
            src="https://bddm.tt.cn/appfe/activities/img/neiquan.04930420.png"
            alt=""
        /></template>
        <template v-slot:btn
          ><img
            src="https://bddm.tt.cn/appfe/activities/img/cs-btn.d77b00ac.png"
            alt=""
        /></template>
      </act-turntable>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  name: 'act-turntable-demo',
  data() {
    return {
      giftNum: 8,
      index: 4,
      ring: 8,
      time: 6000,
    };
  },
  methods: {
    aniEnd() {
      console.log('转动完处理');
    },
  },
};
</script>
<style lang="scss">
img {
  width: 100%;
  height: 100%;
}
</style>
