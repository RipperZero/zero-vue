import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

import {
  HomeView,
  ToDoView,
  DomRefView,
  RequestView,
  CounterView,
  DynamicTabView,
  VModelView,
  SlotView,
  HelloWorldView,
  HandleUserInputView,
  AttributeBindingsView,
  ConditionalsAndLoopsView,
  FormBindingsView,
  SimpleComponentView,
  MarkdownEditorView,
  FetchingDataView,
  GridWithSortAndFilterView,
  TreeView,
} from "@/views";

const routes: Readonly<RouteRecordRaw[]> = [
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
  {
    path: "/v-model",
    name: "v-model",
    component: VModelView,
  },
  {
    path: "/slot",
    name: "slot",
    component: SlotView,
  },
  {
    path: "/examples",
    name: "examples",
    children: [
      {
        path: "basic",
        name: "basic",
        children: [
          {
            // @see https://router.vuejs.org/zh/guide/essentials/nested-routes.html
            path: "hello-world",
            // BUG incorrect syntax
            // path: "/hello-world",
            name: "hello-world",
            component: HelloWorldView,
          },
          {
            path: "handle-user-input",
            name: "handle-user-input",
            component: HandleUserInputView,
          },
          {
            path: "attribute-bindings",
            name: "attribute-bindings",
            component: AttributeBindingsView,
          },
          {
            path: "conditionals-and-loops",
            name: "conditionals-and-loops",
            component: ConditionalsAndLoopsView,
          },
          {
            path: "form-bindings",
            name: "form-bindings",
            component: FormBindingsView,
          },
          {
            path: "simple-component",
            name: "simple-component",
            component: SimpleComponentView,
          },
        ],
      },
      {
        path: "practical",
        name: "practical",
        children: [
          {
            path: "markdown-editor",
            name: "markdown-editor",
            component: MarkdownEditorView,
          },
          {
            path: "fetching-data",
            name: "fetching-data",
            component: FetchingDataView,
          },
          {
            path: "grid-sort-filter",
            name: "grid-sort-filter",
            component: GridWithSortAndFilterView,
          },
          {
            path: "tree-view",
            name: "tree-view",
            component: TreeView,
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export { routes, router };
