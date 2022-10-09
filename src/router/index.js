import { createWebHistory, createRouter } from "vue-router";
import Login from "@/views/Login.vue";
import Profile from "@/views/Profile.vue";
import register from "@/views/register.vue";
import Myteam from "@/views/Myteam";

const routes = [
  { 
    name: 'login',
    path: '/login', 
    component: Login,
  },
  { 
    name: 'profile',
    path: '/', 
    component: Profile, 
    props:true 
  },
  { 
    name: 'register',
    path: '/register', 
    component: register, 
    props:true 
  },
  {
    name: 'Myteam',
    path: '/team',
    component: Myteam,
    props:true
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;