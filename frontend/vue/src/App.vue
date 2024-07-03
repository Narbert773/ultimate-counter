<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);

function incrementCount() {
  count.value += 1;
}

function decrementCount() {
  count.value -= 1;
}
</script>

<template>
  <h1>hello</h1>
  <p>{{ count }}</p>
  <button type="button" @click="incrementCount">+</button>
  <button type="button" @click="decrementCount">-</button>
</template>

<style scoped></style>
