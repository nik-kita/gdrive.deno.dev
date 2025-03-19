<script setup lang="ts">

</script>

<template>
  <h1>Home</h1>
  <RouterLink :to="{
    name: '__preview__dashboard'
  }">Dashboard</RouterLink>
  <RouterView />
</template>
