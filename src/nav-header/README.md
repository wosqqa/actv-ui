# NavHeader 顶部导航

### 介绍

Header 是基于app状态栏不同高度的导航条

### 引入

```js
import Vue from 'vue';
import { NavHeader } from 'actvui';

Vue.use(NavHeader);
```

## 代码演示

### 基础用法

```html
 <act-header title="默认透明" @back="goBack"></act-header>

<act-header type="2" nav-bg="#B4EA9B" title="背景颜色"
 bar-bg="#9eb8ec" @back="goBack" > </act-header>

<act-header type="2" nav-bg="#ffffff" title="字体颜色"
  bar-bg="#e1e1e1"  color="#222222"  @back="goBack">
</act-header>
```

## API

### Props

| 参数          | 说明     | 类型     | 默认值    |
| ------------- | -------- | -------- | --------- |
| type          | 类型 | _string_ | `primary透明、2可调背景跟颜色、3右边小程序样式、4插槽` |
| barBg  | 状态栏背景颜色 | _string_ | -         |
| barHeight  | 状态栏高度 | _string_ | -         |
| color  | 标题文字颜色 | _string_ | -         |
| navBg  | 标题背景颜色 | _string_ | -         |
| title  | 标题文字 | _string_ | -         |

### Events

| 事件名 | 说明       | 回调参数            |
| ------ | ---------- | ------------------- |
| back  | 点击时触发 | _event: MouseEvent_ |
| click  | 点击时触发 | _event: MouseEvent_ |

### Slots

| 名称    | 说明     |
| ------- | -------- |
| default | 默认插槽 |
