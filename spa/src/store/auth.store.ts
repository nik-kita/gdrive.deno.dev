import { defineStore } from "pinia";
import { computed, ref } from "vue";


export const useAuth = defineStore('auth', () => {
  const auth = ref<object | null>(null);
  const isLogin = computed(() => !!auth.value);


  return {
    auth,
    login() {
      auth.value = {};
    },
    logout() {
      auth.value = null;
    },
    isLogin,
  };
});
