import { createRouter, createWebHistory } from "vue-router";
import ViewLab from "../view/ViewLab.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/lab',
      name: 'lab',
      component: ViewLab,
    },
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
