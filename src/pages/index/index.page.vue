<template>
  <h1>Welcome</h1>
  This page is:
  <ul>
    <li>Rendered to HTML.</li>
    <li>Interactive. <Counter /></li>
  </ul>
</template>

<script lang="ts" setup>
import {defineAsyncComponent} from 'vue';

const Counter =
  defineAsyncComponent(() => import('@components/Counter.vue'));
</script>
