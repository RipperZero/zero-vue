import { createRouter, createWebHistory } from "vue-router";

import {
  HomeView,
  ToDoView,
  DomRefView,
  RequestView,
  CounterView,
  DynamicTabView,
} from "@/views";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/todo-list",
      name: "todo-list",
      component: ToDoView,
    },
    {
      path: "/dom-ref",
      name: "dom-ref",
      component: DomRefView,
    },
    {
      path: "/request",
      name: "request",
      component: RequestView,
    },
    {
      path: "/counter",
      name: "counter",
      component: CounterView,
    },
    {
      path: "/dynamic-tab",
      name: "dynamic-tab",
      component: DynamicTabView,
    },
  ],
});

export { router };
