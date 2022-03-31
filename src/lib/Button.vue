<template>
  <button class="gulu-button" :class="`theme-${theme}`" >
    <slot/>
  </button>
</template>

<script lang="ts">
export default {
  name: 'Button',
  props: {
    theme: {
      type:String,
      default:'button'
    }
  },
  setup(props, context) {
  }
};
</script>

<style lang="scss" scoped>
div {
}
</style>