<script setup>
import Calculator from '../components/MyCalculator/Calculator.vue';
</script>

<template>
  <main>
    <Calculator/>
  </main>
</template>
<style lang="scss" scoped>
@use '../assets/sass/main' as *;
  main{
    @include FlexDisplay(row, center, center, 100%, 100%);
  }
</style>
