import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("./components/Home.vue"),
    children: [
      {
        path: "/:id",
        name: "child",
        component: () => import("./components/Child.vue"),
        children: [
          {
            path: "grandchild",
            name: "grandchild",
            component: () => import("./components/Grandchild.vue"),
          },
        ],
      },
    ],
  },
];

export const routerHistory = createWebHistory();

const router = new createRouter({
  history: routerHistory,
  strict: true,
  routes,
});

export default router;
