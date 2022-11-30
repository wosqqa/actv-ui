# Button 按钮

### 介绍

Button 按钮用于触发一个操作，如提交表单、跳转、接口请求等。

### 引入

```js
import Vue from 'vue';
import { Button } from 'actv-ui';

Vue.use(Button);
```

## 代码演示

### 基础用法

```html
<act-button type="primary" />
<act-button color="#ffa6b6" loading="5000" @click="getChildClick">节流按钮</act-button>
```

## API

### Props

| 参数          | 说明     | 类型     | 默认值    |
| ------------- | -------- | -------- | --------- |
| type          | 按钮类型 | _string_ | `primary` |
| color  | 按钮颜色 | _string_ | -         |
| loading  | 节流时间 | _number_ | -    `500`     |

### Events

| 事件名 | 说明       | 回调参数            |
| ------ | ---------- | ------------------- |
| click  | 点击时触发 | _event: MouseEvent_ |

### Slots

| 名称    | 说明     |
| ------- | -------- |
| default | 默认插槽 |
