<template>
  <demo-section>
    <demo-block title="基础用法">
      <div class="ab">
        <act-barrage :speeds="4000" :list="txtArr">
          <div
            class="btxt"
            v-for="(item, index) in txtArr"
            :key="'sll' + index"
          >
            {{ item }}
          </div>
        </act-barrage>
      </div> </demo-block
    ><demo-block title="自定义用法">
      <div class="ab">
        <act-barrage :speeds="4000" :list="txtArr">
          <div
            class="btxt2"
            v-for="(item, index) in txtArr"
            :key="'sll' + index"
          >
            <img :src="userImg" alt="" srcset="" />
            {{ item }}
          </div>
        </act-barrage>
      </div>
    </demo-block>
  </demo-section>
</template>
<script>
export default {
  name: 'act-barrage-demo',
  data() {
    return {
      userImg: 'default.png',
      txtArr: [
        '芳心纵火犯刚刚领到了白银礼包，额外获得200金币',
        '额外获得200金币',
        '芳心纵火犯获得200金币',
        '白银礼包200金币',
        '刚刚领到了白银礼包获得200金币',
      ],
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
.ab {
  .btxt {
    position: absolute;
    top: 0;
    left: 7.5rem;
    width: max-content;
    padding: 0 0.1rem;
    background: rgba(111, 166, 240, 0.4);
    border-radius: 0.26rem;
    font-size: 0.24rem;
    font-family: PingFang SC;
    font-weight: 500;
    color: #222;
    line-height: 0.39rem;
  }
  .btxt2 {
    position: absolute;
    top: 0;
    left: 7.5rem;
    width: max-content;
    padding: 0.1rem 0.3rem;
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
    img {
      width: 0.4rem;
      height: 0.4rem;
      border-radius: 50%;
    }
  }
}
</style>
