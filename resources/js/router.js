import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Project from './views/Project.vue';
import Contractor from './views/Contractor.vue';
import { createWebHistory, createRouter } from 'vue-router';


const routes = [
    { path: '/', component: Home, name: 'Home', meta: { auth: false } },
    { path: '/projects', component: Home, name: 'Projects', meta: { auth: false } },
    { path: '/contractors', component: Home, name: 'Contractors', meta: { auth: false } },
    { path: '/contractors/:contractorid', component: Contractor, name: 'SingleContractor', meta: { auth: false } },
    { path: '/projects/:projectid', component: Project, name: 'Singleproject', meta: { auth: false } },
    { path: '/login', component: Login, name: 'Login', meta: { auth: false } }
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;