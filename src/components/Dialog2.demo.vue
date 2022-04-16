<demo>
示例2
</demo>
<template>
  <Button @click="showDialog">一键展示！</Button>
</template>

<script>
import Button from "../lib/Button.vue";
import {openDialog} from "../lib/openDialog";
export default {
  components: {Button},
  setup() {
    const showDialog = () => {
      openDialog({
        title: '提示', content: "我是content", ok() {
          console.log('1')
        },
        cancel() {
          console.log('2')
        }
      })
    }
    return {showDialog}
  }
}
</script>
