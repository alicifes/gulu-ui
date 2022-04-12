<template>
  <div>
    <div class="topnavAndBanner">
      <Topnav/>
      <div class="banner">
        <h1>轱辘UI</h1>
        <h2>一个厉害的UI框架</h2>
        <p class="actions">
          <a href="">GitHub</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-vue"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-ts"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-lights"></use>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue';

export default {
  name: 'Home',
  components: {Topnav},
};
</script>

<style lang="scss" scoped>
$green: #02bcb0;
$border-radius: 4px;
$color: #007974;

.topnavAndBanner {
  background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
}

.banner {
  color: $color;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > .actions {
    padding: 8px 0;

    a {
      margin: 0 8px;
      background: $green;
      color: white;
      display: inline-block;
      padding: 8px 24px;
      border-radius: $border-radius;

      &:hover {
        text-decoration: none;
      }
    }
  }
}
.features{
  >.icon{
    width: 64px;
    height: 64px;
  }
}

</style>