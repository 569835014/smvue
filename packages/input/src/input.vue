<template >
  <div class="ui input" :class="[float,icon?'icon':'',...otherStyle,status,model]">
    <input :type="type" :class="[model]" :placeholder="placeholder" @input="updateValue($event.target.value)"/>
    <i class="icon" :class="[icon]" v-if="icon"></i>
  </div>
</template>
<script>
  export default {
    name: 'SmInput',
    methods: {
      updateValue (value) {
        this.$emit('input', value)
      }
    },
    model: {
      prop: 'value',
      event: 'input'
    },
    props: {
      // input类型
      type: {
        type: String,
        default: 'text'
      },
      placeholder: {
        type: String,
        default: ''
      },
      status: {
        type: String,
        default: ''
      },
      float: {
        type: String,
        default: 'right'
      },
      icon: {
        type: String,
        default: ''
      },
      value: {
        type: [String, Number],
        default: null
      },
      otherStyle: {
        type: Array,
        default: null
      },
      model: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped>
  @import "input.css";
</style>
