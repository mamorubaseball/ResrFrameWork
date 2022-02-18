import Vue from "vue";
import VueRouter from "vue-router";
import home from "../views/Home.vue";
import job from "../views/Job.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: home,
  },
  {
    path:"/job/:id",
    name: "job",
    component: job,
    props:true,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
