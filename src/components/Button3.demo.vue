<demo>
示例3-level
</demo>
<template>
  <Button>组件</Button>

  <Button theme="button" level="main">组件</Button>
  <Button theme="button" level="danger">组件</Button>

  <Button theme="link" level="danger">组件</Button>
  <Button theme="text" level="main">组件</Button>
  <Button theme="text" level="danger">组件</Button>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
export default {
  components:{Button}
}
</script>

