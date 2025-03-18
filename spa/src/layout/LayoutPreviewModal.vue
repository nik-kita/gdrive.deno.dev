<script setup lang="ts">
import { FormKit } from '@formkit/vue';
import { useRouter } from 'vue-router';

const router = useRouter();
</script>
<template>
  <div class="bg"></div>
  <div class="modal">
    <FormKit type="button" :onclick="() => router.go(-1)">x</FormKit>
    <RouterView name="content"/>
  </div>
</template>

<style scoped>
.bg {
  top: 0px;
  left: 0px;
  position: absolute;
  background-color: grey;
  width: 100%;
  height: 100%;
}
.modal {
  background-color: white;
  position: absolute;
  top: 20px;
  left: 20px;
  border: 2px solid black;
}
</style>