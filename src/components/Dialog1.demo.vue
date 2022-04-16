<demo>
示例
</demo>
<template>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="visible" :close-on-click-overlay="false" :ok="f1" :cancel="f2">
    <template v-slot:title>
      <strong>提示</strong>
    </template>
    <template v-slot:content>
      <div>测试1</div>
      <div>测试1</div>
    </template>
  </Dialog>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import Dialog from '../lib/Dialog.vue'
import {ref} from 'vue';
export default {
  components:{Button,Dialog},
  setup() {
    const visible = ref(false);
    const toggle = () => {
      visible.value = !visible.value;
    };
    const f1 = () => {
      return false
    };
    const f2 = () => {
    };
    return {visible, toggle,f1,f2}
  }
}
</script>

