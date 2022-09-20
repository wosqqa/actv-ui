# Barrage 弹幕组件

### 介绍

Barrage 是基础的弹幕组件

### 引入

```js
import Vue from 'vue';
import { Barrage } from 'actvui';

Vue.use(Barrage);
```

## 代码演示

### 基础用法

```html
<act-barrage :speeds="4000" :list="txtArr">
  <div
    class="btxt"
    v-for="(item, index) in txtArr"
    :key="'sll' + index"
  >
    {{ item }}
  </div>
</act-barrage>
```

## API

### Props

| 参数          | 说明     | 类型     | 默认值    |
| ------------- | -------- | -------- | --------- |
| list          | 弹幕数组 | _string_ | `[]` |
| speeds        | 移动时间 | _Number_ | `5000` |

### Events

| 事件名 | 说明       | 回调参数            |
| ------ | ---------- | ------------------- |

### Slots

| 名称    | 说明     |
| ------- | -------- |
| default | 默认插槽 |
