<template>
  <button class="act-switch">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'switch',
  props: {
    color: String,
    type: {
      type: String,
      default: 'primary',
    },
  },
};
</script>

<style lang="scss">
.act-switch {
  min-width: 120px;
  color: #fff;
  font-size: 16px;
  line-height: 36px;
  background-color: #f44;
  border: none;
  background-image: url('../../assets/head.png');
  border-radius: 30px;
}
</style>
