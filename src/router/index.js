import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Poke from "../views/Poke.vue";
import error from "../views/Error.vue";
import Updates from "../views/Updates.vue";

const routes = [
    {
        name: "Home",
        path: "/",
        component: Home 
    },
    {
        name: "PokeInfo",
        path: "/poke/:id",
        component: Poke
    },
    {
        name: "Updates",
        path: "/updates",
        component: Updates   
    },
    {
        name: "NotFound",
        path: "/:pathMatch(.*)*",
        component: error
    },
];

const router = createRouter({
    history: createWebHistory(),
    mode: 'history',
    parseQuery: false,
    routes
});

export default router;