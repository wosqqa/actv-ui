<template>
  <demo-section>
    <demo-block title="基础用法">
      <act-countdown :dtime="time" @timingEnd="aniEnd">
        <template #time="{ timeObj }">
          <div class="btxt">
            {{ timeObj.h }}:{{ timeObj.m }}:{{ timeObj.s }}
          </div>
        </template>
      </act-countdown>
    </demo-block>
    <demo-block title="自定义用法">
      <act-countdown :dtime="time" @timingEnd="aniEnd">
        <template #time="{ timeObj }">
          <div class="btxt2">
            {{ timeObj.d }}天{{ timeObj.h }}小时{{ timeObj.m }}分{{
              timeObj.s
            }}秒
          </div>
        </template>
      </act-countdown>
    </demo-block>
  </demo-section>
</template>
<script>
export default {
  name: 'act-countdown-demo',
  data() {
    return {
      time: 6000,
    };
  },
  mounted() {
    setTimeout(() => {
      this.time = 10;
    }, 5000);
    setTimeout(() => {
      this.time = 6660;
    }, 15000);
  },
  methods: {
    aniEnd() {
      console.log('倒计时完处理');
    },
  },
};
</script>
<style lang="scss">
.btxt {
  width: max-content;
  padding: 0 0.1rem;
  margin-left: 0.5rem;
  background: rgba(111, 166, 240, 0.4);
  border-radius: 0.26rem;
  font-size: 0.24rem;
  font-family: PingFang SC;
  font-weight: 500;
  color: #222;
  line-height: 0.39rem;
}
.btxt2 {
  width: max-content;
  padding: 0.1rem 0.3rem;
  margin-left: 0.5rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  background: rgb(70, 143, 238);
  border-radius: 0.26rem;
  font-size: 0.24rem;
  font-family: PingFang SC;
  font-weight: 500;
  color: #fff;
  line-height: 0.39rem;
}
</style>
