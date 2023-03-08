<template>
 <div class="btna" @click="getSearchList">
        <div class="t">立即接通</div>
        <div class="b"><span>50分</span>&nbsp;<span class="yj">100分</span> </div>
        <div class="tips">限时5折</div>
      </div>
</template>

<script setup>
</script>

<style lang="scss">
.btna {
  position: relative;
  width: 5.49rem;
  height: 1.2rem;
  margin: 1rem auto;
  background-image: url("../../assets/xqbtn.png");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  .t{
    font-size: 0.36rem;
    font-family: Noto Sans S Chinese;
    font-weight: 500;
    color: #FFFFFF;
    height: 0.7rem;
    line-height: 0.72rem;
    text-align: center;
    position: relative;
    &::before {
      content: '';
      display: inline-block;
      width: 0.47rem;
      height: 0.45rem;
      background-image: url("../../assets/dh.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      vertical-align: middle;
      box-sizing: border-box;
      margin-right: 0.07rem;
      margin-top: -0.05rem;
    }
  }
  .b{
    font-size: 0.24rem;
    font-family: Noto Sans S Chinese;
    font-weight: 500;
    color: #FFFFFF;
    height: 0.4rem;
    line-height: 0.35rem;
    text-align: center;
    span{
      position: relative;
      &::before {
        content: '';
        display: inline-block;
        width: 0.28rem;
        height: 0.28rem;
        background-image: url("../../assets/icon-pic.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        vertical-align: middle;
      }
    }
    .yj{
      opacity: 0.8;
      &::after {
        content: '';
        display: inline-block;
        width: 80%;
        height: 0.02rem;
      }
    }
  }
  .tips{
    position: absolute;
    top: -0.75rem;
    left: 50%;
    transform: translateX(-50%);
    width: 2.72rem;
    height: 0.65rem;
    background-image: url("../../assets/tipss.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    vertical-align: middle;
    font-size: 0.28rem;
    font-family: Noto Sans S Chinese;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 0.58rem;
    text-align: center;
  }
}
</style>
