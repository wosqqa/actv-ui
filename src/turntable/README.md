# Turntable 转盘

### 介绍

Turntable 大转盘组件

### 引入

```js
import Vue from 'vue';
import { Turntable } from 'actvui';

Vue.use(Turntable);
```

## 代码演示

### 基础用法

```html
<turntable type="primary" :ring="ring" :index="index" :time="time">
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
</turntable>
```

## API

### Props

| 参数          | 说明     | 类型     | 默认值    |
| ------------- | -------- | -------- | --------- |
| time          | 转动时间毫秒 | _string_ | `4500` |
| giftNum          | 转盘礼物数量 | _string_ | `8` |
| index          | 转动位置 | _string_ | `0` |
| ring          | 转动圈数 | _string_ | `5` |

### Events

| 事件名 | 说明       | 回调参数            |
| ------ | ---------- | ------------------- |
| click  | 点击时触发 | _event: MouseEvent_ |

### Slots

| 名称    | 说明     |
| ------- | -------- |
| boxbg | 转盘背景插槽 |
| disk | 转盘圆盘 |
| btn | 转盘指针 |
