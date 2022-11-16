<template>
  <div class="act-button">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'act-button',

  props: {
    color: String,
    type: {
      type: String,
      default: 'a',
    },
  },
};
</script>

<style lang="scss">
.act-button {
  width: 6.9rem;
  height: 0.98rem;
  background: linear-gradient(90deg, #ffa6b6 0%, #fed2bb 100%);
  border-radius: 0.64rem;
  opacity: 1;
  font-size: 0.34rem;
  font-family: PingFang SC-粗体, PingFang SC;
  font-weight: normal;
  color: #0b1355;
  line-height: 0.98rem;
  text-align: center;
}
</style>
