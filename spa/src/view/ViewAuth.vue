<script lang="ts" setup>
import ComponentLogin from '../components/ComponentLogin.vue';
import ComponentLogout from '../components/ComponentLogout.vue';
import { useAuth } from '../store/auth.store';

const auth = useAuth();

</script>
<template>
  <h2>Auth</h2>

  <ComponentLogin v-if="auth.isLogin"/>
  <ComponentLogout v-else />
</template>