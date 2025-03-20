import { useQuery } from "@vue/apollo-composable";
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { graphql } from "../gql";

export const useAuth = defineStore("auth", () => {
  const auth = ref<object | null>(null);
  const isLogin = computed(() => !!auth.value);
  const example = useQuery(graphql(`
    query ExampleQuery {
      me {
        _id
      }
    }
  `));

  example.onResult(() => {
    console.log("result!");
  });
  const me = computed(() => example.result.value?.me || null);

  return {
    me,
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
