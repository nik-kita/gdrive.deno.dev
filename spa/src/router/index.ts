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
      path: '/auth',
      name: 'auth',
      component: () => import('../view/ViewAuth.vue'),
    },
    {
      path: "/",
      name: "home",
      component: () => import("../view/ViewHome.vue"),
      children: [
        {
          path: "/auth",
          component: () => import("../layout/LayoutPreviewModal.vue"),
          children: [
            {
              path: "",
              name: "__preview__auth",
              components: {
                __content: () => import("../view/ViewAuth.vue"),
              },
            },
          ],
        },
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
