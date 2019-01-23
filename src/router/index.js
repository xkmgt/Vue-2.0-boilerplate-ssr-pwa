import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from "../pages/home/Index.vue";
import About from "../pages/about/Index.vue";
import Contact from "../pages/contact/Index.vue";
import Service from "../pages/service/Index.vue";
import Service1 from "../pages/service/Service1.vue";
import Service2 from "../pages/service/Service2.vue";
import Service3 from "../pages/service/Service3.vue";
import Service4 from "../pages/service/Service4.vue";
import Imprint from "../pages/imprint/Index.vue";

export function createRouter () {
  return new Router({
    mode: "history",
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: "/", component: Home },
      { path: "/about", component: About },
      { path: "/contact", component: Contact },
      { path: "/service", component: Service },
      { path: "/service/service-1", component: Service1 },
      { path: "/service/service-2", component: Service2 },
      { path: "/service/service-3", component: Service3 },
      { path: "/service/service-4", component: Service4 },
      { path: "/imprint", component: Imprint },
    ]
  });
}
