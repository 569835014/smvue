<template>
  <div class="ui divider" :class="[direction,fitted?'fitted':'',hide?'divider':'',clearing?'clearing':'',header?'header':'']">
    <i class="icon" :class="icon" v-if="icon"></i>
    <template v-if="text">
      {{text}}
    </template>
    <template v-else>
      <slot></slot>
    </template>
  </div>
</template>
<script>
  export default {
    name: 'SmDivider',
    props: {
      // 分割线方向
      direction: {
        type: String,
        default: ''
      },
      text: {
        type: String,
        default: null
      },
      // divider的上面或下面可以没有任何空间
      fitted: {
        type: Boolean,
        default: false
      },
      // 可以通过隐藏的分隔线来分隔内容而不用创建一条分隔线
      hide: {
        type: Boolean,
        default: false
      },
      // 分割线可以清除它上方的内容
      clearing: {
        type: Boolean,
        default: false
      },
      header: {
        type: Boolean,
        default: false
      },
      icon: {
        type: String,
        default: null
      }
    }
  }
</script>

<style scoped>
  @import "divider.css";
</style>
