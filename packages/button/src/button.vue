<template >
  <button class="ui button"
          v-if="model!=='group'"
          :class="[type,disabled?'disabled':'',icon?'icon':'',labeled?'labeled':'']"
  >
    <template>
      <i class="icon" slot="icon" v-if="icon" :class="icon"></i>
      <slot>
      </slot>
    </template>
  </button>
  <div class="ui buttons"
       :class="[type,disabled?'disabled':'',icon?'icon':'',labeled?'labeled':'']"
       v-else>
      <template v-if="!condition">
        <slot ></slot>
      </template>
      <template v-else>
          <slot name="left"></slot>
          <div class="or" :data-text="condition"></div>
          <slot name="right"></slot>
      </template>
  </div>
</template>
<script>
  export default {
    name: 'SmButton',
    props: {
      type: {
        type: String
      },
      icon: {
        type: String,
        default: ''
      },
      labeled: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      model: {
        type: String,
        default: ''
      },
      condition: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped>
  @import "button.css";
</style>
