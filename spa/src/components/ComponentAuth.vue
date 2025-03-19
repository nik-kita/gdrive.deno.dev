<script setup lang="ts">
import { FormKit } from '@formkit/vue';
import {useAuth } from '../store/auth.store';

const auth = useAuth();
</script>

<template>
  <template v-if="auth.isLogin">
    <FormKit type="button">Logout</FormKit>
  </template>
  <template v-else>
    <FormKit type="button">Sign in with Google</FormKit>
  </template>
</template>