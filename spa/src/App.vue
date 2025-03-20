<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import ComponentAuth from './components/ComponentAuth.vue';


</script>

<template>
  <ComponentAuth />
  <hr/>
  <RouterLink :to="{ name: 'home' }">Home</RouterLink>
  <RouterView />
</template>
  