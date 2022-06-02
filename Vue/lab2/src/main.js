import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import homeComponent from "./components/home.vue";
import listUsers from "./components/users/list.vue";
import addUser from "./components/users/add.vue";
import userDetails from "./components/users/details.vue";

const routes = [
  {
    path: "/",
    component: homeComponent,
  },
  {
    path: "/users",
    component: listUsers,
  },
  {
    path: "/add",
    component: addUser,
  },
  {
    path: "/users/:id",
    component: userDetails,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
