

# Input 按钮
----
### 基础用法
<div class="demo-block">
  <sm-input placeholder='基本用法'></sm-input>
  <sm-input v-model='val' placeholder='双向绑定'></sm-input>
</div>
<script>
 export default {
    data(){
       return {
          val:''
       }
    }
  }
</script>

::: demo
```html
   <sm-input placeholder='基本用法'></sm-input>
   <sm-input v-model='val' placeholder='双向绑定'></sm-input>
   <script>
    export default {
       data(){
          return {
             val:''
          }
       }
     }
   </script>
```
:::

### 禁用状态和高亮状态
```status```属性可以给输入框添加图标，
<div class="demo-block">
    <sm-input placeholder='禁用状态' status='disabled'></sm-input>
    <sm-input placeholder='高亮状态' status='focus'></sm-input>
    <sm-input placeholder='错误状态' status='error'></sm-input>
</div>

::: demo
```html
 <sm-input placeholder='禁用状态' status='disabled'></sm-input>
 <sm-input placeholder='高亮状态' status='focus'></sm-input>
 <sm-input placeholder='高亮状态' status='error'></sm-input>
```
:::

### 输入框与图标
```icon```属性可以给输入框添加图标，```float```可以控制图标的方向，默认为右方
<div class="demo-block">
  <sm-input placeholder='图标用法' icon='search'></sm-input>
  <sm-input placeholder='左边图标' icon='search' float='left'></sm-input>
</div>

::: demo
```html
  <sm-input placeholder='图标用法' icon='search'></sm-input>
  <sm-input placeholder='左边图标' icon='search' float='left'></sm-input>
```
:::
### Model
```model```可以调整输入框的模式，
<div class="demo-block">
  <sm-input placeholder='透明输入法' model='transparent' icon='search' float='left'></sm-input>
</div>

::: demo
```html
 <sm-input placeholder='透明输入法' model='transparent' icon='search' float='left'></sm-input>
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
