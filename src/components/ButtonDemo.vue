<template>
  <h1>Button 示例</h1>
  <Demo :component="Button1Demo"/>
  <Demo :component="Button2Demo"/>
  <Demo :component="Button3Demo"/>
  <Demo :component="Button4Demo"/>
  <Demo :component="Button5Demo"/>
</template>

<script lang="ts">
import Button1Demo from './Button1.demo.vue';
import Button2Demo from './Button2.demo.vue';
import Button3Demo from './Button3.demo.vue';
import Button4Demo from './Button4.demo.vue';
import Button5Demo from './Button5.demo.vue';
import Demo from './Demo.vue';

export default {
  components: {Demo},
  setup() {
    const click = () => {
      console.log('1');
    };
    return {click , Button1Demo, Button2Demo,Button3Demo,Button4Demo,Button5Demo};
  }
};
</script>