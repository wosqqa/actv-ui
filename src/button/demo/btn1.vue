<template>
  <div
    :class="{ 'act-button': true, 'act-button-and': breathing }"
    @click="toClick"
  >
    <slot />
  </div>
</template>

<script setup>
let isClick = true;
const emits = defineEmits(['click']);
const props = defineProps({
  type: {
    type: String,
    default: 'a',
  },
  loading: {
    type: Number,
    default: 500,
  },
  breathing: {
    type: Boolean,
    default: false,
  },
});
console.log('按钮', props.loading);
const toClick = () => {
  if (isClick) {
    isClick = false;
    emits('click', 'child value'); // 向父组件传递数据
    setTimeout(() => {
      isClick = true;
    }, props.loading);
  }
};
</script>

<style lang="scss">
.act-button {
  width: 6.9rem;
  height: 0.98rem;
  border-radius: 0.64rem;
  opacity: 1;
  font-size: 0.34rem;
  font-family: PingFang SC-粗体, PingFang SC;
  font-weight: normal;
  color: #0b1355;
  line-height: 0.98rem;
  text-align: center;
}
.act-button-and {
  animation: actBtnAn 1.5s infinite linear;
  @keyframes actBtnAn {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(1);
    }
  }
}
</style>
