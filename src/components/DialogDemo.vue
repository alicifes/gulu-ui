<template>
  <div>dialog示例</div>
  <h1>示例1</h1>
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
  <h1>实例2</h1>
  <Button @click="showDialog">一键展示！</Button>
</template>

<script>
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import {ref} from "vue";
import {openDialog} from "../lib/openDialog";

export default {
  components: {Button, Dialog},
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
    const showDialog = () => {
      openDialog({
        title: '提示', content: "我是content", ok() {
          console.log('1')
        },
        cancel(){
          console.log('2')
        }
      })
    }
    return {visible, toggle, f1, f2, showDialog}
  }
}
</script>

<style scoped>

</style>