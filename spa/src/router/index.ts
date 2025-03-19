import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../view/ViewDashboard.vue"),
    },
    {
      path: "/",
      name: "home",
      components: {
        default: () => import("../view/ViewHome.vue"),
        login: () => import("../components/ComponentLogin.vue"),
        logout: () => import("../components/ComponentLogout.vue"),
      },
      children: [
        {
          path: "/dashboard",
          component: () => import("../layout/LayoutPreviewModal.vue"),
          children: [
            {
              path: "",
              name: "__preview__dashboard",
              components: {
                __content: () => import("../view/ViewDashboard.vue"),
              },
            },
          ],
        },
      ],
    },
  ],
});

export default router;
