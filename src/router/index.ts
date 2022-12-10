import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import ToDoView from "../views/Todo/ToDoView.vue";
import DomRefView from "../views/DomRefView.vue";
import RequestView from "../views/RequestView.vue";
import CounterView from "../views/CounterView.vue";

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
  ],
});

export { router };
