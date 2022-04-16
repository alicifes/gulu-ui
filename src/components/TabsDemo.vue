<template>
<Demo :component="TabsDemo" />
</template>

<script lang="ts">
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'
import {ref} from 'vue';
import Demo from './Demo.vue';
import TabsDemo from './Tabs.demo.vue'
export default {
  components:{Demo, Tabs,Tab},
  setup(){
   const x = ref('导航1');
    return {x,TabsDemo}
  }
}
</script>

