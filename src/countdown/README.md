# Barrage 弹幕组件

### 介绍

Barrage 是基础的弹幕组件

### 引入

```js
import Vue from 'vue';
import { Countdown } from 'actvui';

Vue.use(Countdown);
```

## 代码演示

### 基础用法

```html
<act-countdown :dtime="time" @timingEnd="aniEnd">
  <template #time="{ timeObj }">
    <div class="btxt">
     {{ timeObj.d }}天{{ timeObj.h }}小时{{ timeObj.m }}分{{ timeObj.s }}秒
    </div>
  </template>
</act-countdown>
```

## API

### Props

| 参数          | 说明     | 类型     | 默认值    |
| ------------- | -------- | -------- | --------- |
| dtime          | 倒计时秒 | _Number_ | `60` |

### Events

| 事件名 | 说明       | 回调参数            |
| ------ | ---------- | ------------------- |
| timingEnd  | 结束事件 |  |   |
### Slots

| 名称    | 说明     |
| ------- | -------- |
| time | 插槽 |
