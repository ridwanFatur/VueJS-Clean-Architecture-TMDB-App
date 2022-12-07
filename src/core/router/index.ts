import Vue from "vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MainScreen from "@/presentation/main_screen/MainScreen.vue";
import NotFoundScreen from "@/presentation/not_found_screen/NotFoundScreen.vue";
// import DetailScreen from "@/presentation/detail_screen/DetailScreen.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "MainScreen",
    component: MainScreen,
    children: [
      {
        path: "/",
        redirect: "/home",
      },
      {
        path: "home",
        name: "HomeScreen",
        component: () => import("@/presentation/home_screen/HomeScreen.vue"),
      },
      {
        path: "search",
        name: "SearchScreen",
        component: () =>
          import("@/presentation/search_screen/SearchScreen.vue"),
      },
      {
        path: "movies",
        redirect: "movies/1",
      },
      {
        path: "movies/:page(\\d+)",
        name: "MovieListScreen",
        component: () =>
          import("@/presentation/movie_list_screen/MovieListScreen.vue"),
      },
      {
        path: "tv-shows",
        redirect: "tv-shows/1",
      },
      {
        path: "tv-shows/:page(\\d+)",
        name: "TvShowsScreen",
        component: () =>
          import("@/presentation/tv_show_list_screen/TvShowListScreen.vue"),
      },
    ],
  },
  // {
  //   path: "/detail",
  //   name: "DetailScreen",
  //   component: DetailScreen,
  // },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFoundScreen",
    component: NotFoundScreen,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
