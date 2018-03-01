# Divider 按钮
----
### 基础用法
使用```direction```属性来定义 Divider 的方向<br/>
使用```icon```属性给Divider添加标签<br/>
可以使用```text```属性给Divider添加内容<br/>
<div class="demo-block">
  <sm-divider></sm-divider>
  <sm-divider direction='horizontal'>horizontal</sm-divider>
  <div style='width:200px;height:200px;position: relative;'>
       <sm-divider direction='vertical'>vertical</sm-divider>
  </div>
  <sm-divider icon='bar chart' direction='horizontal'>添加图标的分隔符</sm-divider>
  <sm-divider direction='horizontal' text='添加图标的分隔符' icon='bar chart'></sm-divider>
</div>

::: demo
```html
  <sm-divider></sm-divider>
  <sm-divider direction='horizontal'>horizontal</sm-divider>
  <div style='width:200px;height:200px;position: relative;'>
       <sm-divider direction='vertical'>vertical</sm-divider>
  </div>
   <sm-divider icon='bar chart' direction='horizontal'>添加图标的分隔符</sm-divider>
   <sm-divider direction='horizontal' text='添加图标的分隔符' icon='bar chart'></sm-divider>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| direction     | 分割线的方向   | string  |   horizontal,vertical            |    —     |
| text     | 内容   | string    |   — |     —    |
| fitted     | divider的上面或下面可以没有任何空间   | Boolean    | — | false   |
| hide  | 隐藏的分隔线    | Boolean   | —   | false   |
| icon  | 图标，已有的图标库中的图标名 | Boolean   |  —  |  false  |
| clearing  | 分割线可以清除它上方的浮动 | Boolean   |  —  |  false |
