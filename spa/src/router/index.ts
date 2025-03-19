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
      component: () => import("../view/ViewHome.vue"),
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
    {
      path: "/:pathMatch(.*)*",
      redirect: {
        name: "home",
      },
    },
  ],
});

export default router;
