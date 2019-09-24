let routes = [{
        path: '/',
        name: '',
        component: require('./components/partial/content2.vue').default
    },
    {
        path: '/usersapi',
        name: '',
        component: require('./components/tabelapi.vue').default
    }
];


/*export default new VueRouter({
        routes,
        mode: 'history'
})*/
export default routes
