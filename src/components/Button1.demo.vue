<demo>
示例1-theme
</demo>
<template>
  <div>
    <Button>组件</Button>
    <Button theme="button">组件</Button>
    <Button theme="link">组件</Button>
    <Button theme="text">组件</Button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components:{Button}
}
</script>