import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../components/auth/Login.vue";
import Register from "@/components/auth/Register.vue";
import Dashboard from "@/views/Dashboard.vue";

const routes = [
    { path: "/", component: Home },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    { path: "/dashboard", component: Dashboard },
    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;