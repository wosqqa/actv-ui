<template>
  <div v-show="showing" class="toast">{{ content }}</div>
</template>

<script lang="ts" setup>
defineProps({
  showing: {
    type: Boolean,
    default: false,
  },
  content: {
    type: String,
    default: '',
  },
});
this.showing = true;
setTimeout(() => {
  this.showing = false;
}, 2000);
</script>

<style scoped lang="less">
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  animation: opacity 0.2s ease-in;

  font-size: 0.3rem;
  background: rgba(0, 0, 0, 0.7);
  padding: 0.2rem 0.4rem;
  border-radius: 0.2rem;
  z-index: 10000;
  min-width: 1rem;
  max-width: 3rem;
  color: #fff;
}
</style>
