import Vue from "vue";
import Router from "vue-router";

import Home from "./views/Home.vue";
import Overview from "./views/Overview.vue";
import PopularMovie from "./views/PopularMovie.vue";
import TVshows from "./views/TVshows.vue";
import Actors from "./views/Actors.vue";
import SearchResult from "./views/SearchResult.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/overview",
      name: "overview",
      component: Overview
    },
    {
      path: "/popular-movie",
      name: "PopularMovie",
      component: PopularMovie
    },
    {
      path: "/tv-shows",
      name: "TVshows",
      component: TVshows
    },
    {
      path: "/actors",
      name: "actors",
      component: Actors
    },
    {
      path: "/search-result",
      name: "SearchResult",
      component: SearchResult

    }
  ]
});
