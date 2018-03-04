<template >
  <div class="ui input" :class="[float,icon?'icon':'',disabled?'disabled':'',...otherStyle]">
    <input :type="type" :placeholder="placeholder" @input="updateValue($event.target.value)"/>
    <i class="icon" :class="[icon]" v-if="icon"></i>
  </div>
</template>
<script>
  export default {
    name: 'SmInput',
    methods:{
      updateValue(value){
        this.$emit('input', value)
      }
    },
    model:{
      prop:'value',
      event:'input'
    },
    props: {
      // input类型
      type:{
        type:String,
        default:'text'
      },
      placeholder:{
        type:String,
        default:''
      },
      focus:{
        type:Boolean,
        default:false
      },
      float:{
        type:String,
        default:''
      },
      icon:{
        type:String,
        default:''
      },
      disabled:{
        type:Boolean,
        default:null
      },
      value:{
        type:[String,Number],
        default:null
      },
      otherStyle:{
        type:Array,
        default:null
      },
      model:{

      }
    }
  }
</script>

<style scoped>
  @import "input.css";
</style>
