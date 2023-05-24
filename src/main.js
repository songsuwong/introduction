/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

import App from './App.vue'
import { createApp } from 'vue'
import { registerPlugins } from '@/plugins'
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/', component: () => import('@/views/index.vue') },
    { path: '/aboutMe', component: () => import('@/views/aboutMe.vue') },
    { path: '/md', component: () => import('@/views/md.vue') },
    { path: '/github', component: () => import('@/views/github.vue') },
]
const Router = createRouter({
    history: createWebHistory(),
    routes: routes,
});
console.log(routes)
const app = createApp(App)

registerPlugins(app)
app.use(Router)
app.mount('#app')
