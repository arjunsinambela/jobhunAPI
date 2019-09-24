/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import routes from './routes.js'
import VueRouter from 'vue-router'
import VModal from 'vue-js-modal'

require('./bootstrap');

window.Vue = require('vue');

Vue.use(VueRouter)
const router = new VueRouter({
    routes: routes
})
Vue.use(VModal)

// Vue.component('pagination', require('laravel-vue-pagination'));

Vue.component('contoh-component', require('./components/ExampleComponent.vue').default);
Vue.component('contoh-component-dua', require('./components/ExampleComponent2.vue').default);

// Latihan Page
Vue.component('sidebar-component', require('./components/partial/sidebar.vue').default);

Vue.component('topbar-component', require('./components/partial/topbar.vue').default);
Vue.component('content-component', require('./components/partial/content.vue').default);

// Vue.component('content2-component', require('./components/partial/content2.vue').default);

// File CRUD
Vue.component('crud-component', require('./components/partial/crud.vue').default);


const app = new Vue({
    router,
    el: '#app'
});

const coba = new Vue({
    el: '#coba'
});