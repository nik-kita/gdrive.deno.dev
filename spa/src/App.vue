<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router';
import { useAuth } from './store/auth.store';

const route = useRoute();
const auth = useAuth();

</script>

<template>
  <RouterLink :to="{ name: 'home' }" v-show="route.name !== 'home'">Home</RouterLink>
  <RouterLink :to="{ name: '__preview__auth' }" v-show="route.name !== 'auth'">{{ auth.isLogin ? 'Logout' : 'Sign In With Google' }}</RouterLink>
  <RouterView />
</template>
  