<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router';

</script>

<template>
  <h1>Home</h1>
  <RouterLink :to="{
    name: '__preview__dashboard'
  }">Dashboard</RouterLink>
  <RouterView />
</template>
