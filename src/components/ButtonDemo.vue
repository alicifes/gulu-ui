<template>
  <div>Button 示例</div>
  <h1>示例1-theme</h1>
   <div>
     <Button>组件</Button>
     <Button theme="button">组件</Button>
     <Button theme="link">组件</Button>
     <Button theme="text">组件</Button>
   </div>
  <h1>示例2-size</h1>
  <div>
    <Button>组件</Button>
    <Button size="small">组件</Button>
    <Button size="normal"> 组件</Button>
    <Button size="big">组件</Button>
  </div>
  <h1>示例3-level</h1>
  <div>
    <Button>组件</Button>

    <Button theme="button" level="main">组件</Button>
    <Button theme="button" level="danger">组件</Button>

    <Button theme="link" level="danger">组件</Button>
    <Button theme="text" level="main">组件</Button>
    <Button theme="text" level="danger">组件</Button>
  </div>
  <h1>示例4-disable</h1>
  <div>
    <Button disabled>禁用组件</Button>
    <Button theme="link" disabled>禁用链接按钮</Button>
    <Button theme="text" disabled>禁用按钮</Button>
  </div>
  <h1>示例5-loading</h1>
  <div>
    <Button loading>加载中</Button>
    <Button >加载完毕</Button>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';

export default {
  name: 'ButtonDemo',
  components: { Button},
  setup() {
    const click = () => {
      console.log('1');
    };
    return {click};
  }
};
</script>

<style scoped>

</style>