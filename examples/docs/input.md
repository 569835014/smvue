

# Divider 按钮
----
### 基础用法
<div class="demo-block">
  <div>
     <sm-input :otherStyle="['error']"></sm-input>
      <sm-input  v-model.number='a'></sm-input>
  </div>
  <div>
     <sm-input placeholder='输入框 '></sm-input>
  </div>
  <div>
     <sm-input placeholder='search' icon='search' float='left'></sm-input>
  </div>
  <div>
     <sm-input placeholder='search' icon='search' float='right'></sm-input>
  </div>
  <div>
    <sm-input disabled></sm-input>
  </div>
</div>
<script>
 export default {
    data(){
       return {
          a:''
       }
    },
    methods: {
      hello() {
        alert('Hello World!');
      }
    }
  }
</script>

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| direction     | 分割线的方向   | string  |   horizontal,vertical            |    —     |
| text     | 内容   | string    |   — |     —    |
| fitted     | divider的上面或下面可以没有任何空间   | Boolean    | — | false   |
| hide  | 隐藏的分隔线    | Boolean   | —   | false   |
| icon  | 图标，已有的图标库中的图标名 | Boolean   |  —  |  false  |
| clearing  | 分割线可以清除它上方的浮动 | Boolean   |  —  |  false |
