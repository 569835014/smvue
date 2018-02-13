# Button 按钮
----
### 基础用法
使用```type```、```plain```和```round```属性来定义 Button 的样式。

<div class="demo-block">
  <div>
    <sm-button>默认按钮</sm-button>
    <sm-button type="basic">basic</sm-button>
    <sm-button type="primary">primary</sm-button>
    <sm-button type="secondary">secondary</sm-button>
    <sm-button type="positive">position</sm-button>
    <sm-button type="negative">position</sm-button>
  </div>
  <div class="m-10">
 
  </div>
  <div class="m-10">
  
  </div>
</div>

::: demo
```html

<div>
  <sm-button>默认按钮</sm-button>
  <sm-button type="basic">basic</sm-button>
  <sm-button type="primary">默认按钮</sm-button>
   <sm-button type="secondary">primary</sm-button>
   <sm-button type="secondary">secondary</sm-button>
   <sm-button type="positive">position</sm-button>
   <sm-button type="negative">position</sm-button>
</div>
<div>
 
</div>
<div>
 
</div>

```
:::

### 禁用状态

按钮不可用状态。

<div class="demo-block">
  <div>
    <sm-button disabled>默认按钮</sm-button>
    <sm-button type="primary" disabled>primary</sm-button>
    <sm-button type="secondary" disabled>secondary</sm-button>
    <sm-button type="positive" disabled>position</sm-button>
    <sm-button type="negative" disabled>negative</sm-button>
  
  </div>
  <div class="m-10">
  
  </div>
</div>

::: demo
```html

<div>
    <sm-button disabled>默认按钮</sm-button>
    
    <sm-button type="primary" disabled>primary</sm-button>
    <sm-button type="secondary" disabled>secondary</sm-button>
    <sm-button type="positive" disabled>position</sm-button>
    <sm-button type="negative" disabled>negative</sm-button>
</div>
<div class="m-10">
 
</div>
  
```
:::

### 图标按钮
带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。
设置```icon```属性即可，icon 的列表可以参考 VV-UI 的 icon 组件，也可以设置在文字右边的 icon ，只要使用```i```标签即可，可以使用自定义图标。
<div class="demo-block">
  <sm-button icon='cloud'></sm-button>
  <sm-button icon='cloud'>按钮</sm-button>
</div>

::: demo
```html
<div>
  <sm-button icon='cloud'></sm-button>
  <sm-button icon='cloud'>按钮</sm-button>
</div>

```
:::
### 按钮组
设置按钮```model```属性为group即可嵌套一个按钮成功一个组合按钮。
<div class="demo-block">
  <sm-button model='group'>
     <sm-button >left</sm-button>
     <sm-button >middle</sm-button>
     <sm-button >right</sm-button>
  </sm-button>
   <sm-button model='group'>
       <sm-button icon='bold'></sm-button>
       <sm-button icon='underline'></sm-button>
       <sm-button icon='text width'></sm-button>
    </sm-button>
     <sm-button model='group' condition='or'>
            <sm-button icon='bold' slot='left'></sm-button>
            <sm-button icon='text width' slot='right'></sm-button>
     </sm-button>
     <sm-button model='group' condition='and'>
            <sm-button icon='bold' slot='left'></sm-button>
            <sm-button type="positive" icon='text width' slot='right'></sm-button>
      </sm-button> 
     
</div>


::: demo
```html
 <sm-button model='group'>
     <sm-button >left</sm-button>
     <sm-button >middle</sm-button>
     <sm-button >right</sm-button>
  </sm-button>
  
   <sm-button model='group'>
      <sm-button icon='bold'></sm-button>
      <sm-button icon='underline'></sm-button>
      <sm-button icon='text width'></sm-button>
    </sm-button>
     <sm-button model='group' condition='or'>
         <sm-button icon='bold' slot='left'></sm-button>
         <sm-button icon='text width' slot='right'></sm-button>
     </sm-button>
      <sm-button model='group' condition='and'>
             <sm-button icon='bold' slot='left'></sm-button>
             <sm-button type="positive" icon='text width' slot='right'></sm-button>
       </sm-button> 

```
:::

### 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。
额外的尺寸：```medium```、```small```，通过设置```size```属性来配置它们。
<div class="demo-block">
  
</div>

::: demo
```html



```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   default,medium,small            |    —     |
| type     | 类型   | string    |   primary,success,warning,danger,info |     —    |
| plain     | 是否朴素按钮   | Boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 图标，已有的图标库中的图标名 | string   |  —  |  —  |
