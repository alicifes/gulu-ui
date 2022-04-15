<template>
<!--  <div>
    <Switch v-model:value = 'bool'/>
    <Switch :value = 'bool' @update:value="bool=$event"/>
  </div>-->
  <div>
    <Demo :component="Switch1Demo" />
    <Demo :component="Switch2Demo" />
  </div>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue';
import Button from '../lib/Button.vue'
import {ref} from 'vue';
import Switch1Demo from './Switch1.demo.vue'
import Switch2Demo from './Switch2.demo.vue'
import 'prismjs'
import 'prismjs/themes/prism.css'
import Demo from './Demo.vue';

const Prism = (window as any).Prism;//需要暴露出去才能被接受

export default {
  name: 'SwitchDemo',
  components: {Demo,Switch,Button},
  setup(){
   const bool = ref(true)
   return {bool,Switch1Demo,Switch2Demo,Prism}
  }
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;

  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  &-component {
    padding: 16px;
  }

  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }

  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;

    > pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}

</style>