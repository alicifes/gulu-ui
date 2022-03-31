<template>
  <div>
    <Button theme="button">nwoshiButton组件</Button>
    <Button>组件</Button>
    <Button theme="link">组件</Button>
    <Button theme="text">组件</Button>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';

export default {
  name: 'ButtonDemo',
  components: {Button},
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