<script lang="ts">
const PREVIEW_PREFIX_LEN = '__preview__'.length;
</script>
<script setup lang="ts">
import { Cross2Icon, SizeIcon } from '@radix-icons/vue';
import { onClickOutside, onKeyStroke } from '@vueuse/core';
import { useTemplateRef } from 'vue';
import { useRouter } from 'vue-router';


const modal = useTemplateRef<HTMLElement>('modal');
const router = useRouter();
const name = (router.currentRoute.value.name as string | undefined)!.slice(PREVIEW_PREFIX_LEN);
const back = () => {
  router.go(-1);
}
const enter = () => {
  router.replace({ name });
}

onClickOutside(modal, back);
onKeyStroke(['Enter'], (ev) => {
  ev.preventDefault();
  enter();
});
onKeyStroke(['Escape'], (ev) => {
  ev.preventDefault();
  back();
});

</script>
<template>
  <div class="bg">
    <div ref="modal" class="modal" @dblclick="enter">
      <Cross2Icon @click="back" class="pointer"  />
      <SizeIcon @click="enter" class="pointer" />
      <RouterView name="__content"/>
    </div>
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid black;
}
</style>