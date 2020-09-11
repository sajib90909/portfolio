require('./bootstrap');

window.Vue = require ('vue')

Vue.component('mainapp',require('./components/admin-panel/mainapp.vue').default)

import router from './router'
const app = new Vue({
    el: '#app',
    router
})
