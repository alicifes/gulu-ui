<template>
  <button :class="{'gulu-checked':value}" @click="toggle" class="gulu-switch"><span></span></button>
</template>

<script lang="ts">

export default {
  props:{
   value:Boolean
  },
  setup(props,context){
    const toggle = ()=>{
     context.emit('update:value',!props.value) //vue3的v-model要求必须为update：xx事件
    }
    return {toggle}
  }
};
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;

.gulu-switch{
  height: $h;
  width: $h*2;
  position: relative;
  background: #bfbfbf;
  border: none;
  border-radius: $h/2;
  >span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2/2;
    transition:all 0.5s;
  }
  &.gulu-checked{
    background: #1890ff;
    >span{
      left: calc(100% - #{$h2} - 2px);
    }
    &:active{
      > span {width: $h2 + 4px; margin-left: -4px;}
    }
  }
  &:focus{
    outline: none;
  }
  &:active{
    > span {width: $h2 + 4px;}
  }
}
</style>