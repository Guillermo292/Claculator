<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <h1>A normal calculator</h1>
  </header>
  <RouterView />
</template>

<style lang="scss" scoped>
@use '../src/assets/sass/main'as *;
header{
  @include FlexDisplay(row, center, center, 100%, auto);
  background-color: $principalcolor;
}
</style>
