<script setup lang="ts">
import { useAuth } from '../store/auth.store';

const auth = useAuth();

</script>

<template>
  <h1>Lab</h1>
  <hr/>
  <h2>Result</h2>
  <pre>{{  auth.me }}</pre>
</template>