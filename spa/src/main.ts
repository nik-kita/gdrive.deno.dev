import "./assets/main.css";
import { formkitPlugin } from "./plugin/formkit.plugin";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { DefaultApolloClient, apolloClient } from './plugin/apollo.plugin';

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.provide(DefaultApolloClient, apolloClient);
app.use(createPinia());
app.use(router);
app.use(formkitPlugin.plugin, formkitPlugin.config);
app.mount("#app");
