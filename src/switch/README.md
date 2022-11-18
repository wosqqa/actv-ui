# Switch 开关

### 介绍

用于在打开和关闭状态之间进行切换。

### 引入

```js
import Vue from 'vue';
import { Switch } from 'actv-ui/lib/index.js';

Vue.use(Switch);
```

## 代码演示

### 基础用法

```html
<act-switch type="primary" />
```

## API

### Props

| 参数          | 说明     | 类型     | 默认值    |
| ------------- | -------- | -------- | --------- |
| type          | 按钮类型 | _string_ | `primary` |
| color `1.0.0` | 按钮颜色 | _string_ | -         |

### Events

| 事件名 | 说明       | 回调参数            |
| ------ | ---------- | ------------------- |
| click  | 点击时触发 | _event: MouseEvent_ |

### Slots

| 名称    | 说明     |
| ------- | -------- |
| default | 默认插槽 |
