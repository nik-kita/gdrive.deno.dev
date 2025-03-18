<script setup lang="ts">

</script>

<template>
  <h1>Home</h1>
  <RouterLink :to="{
    name: 'preview-modal_dashboard'
  }">Dashboard</RouterLink>
  <RouterView />
</template>
