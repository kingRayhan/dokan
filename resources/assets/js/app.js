require('./bootstrap');

window.Vue = require('vue');


/**
 * Jquery Plugins
 */
require('print-js');
// select 2
require('select2');
require('select2/src/scss/core.scss');
require('sweetalert');
// require('chart.js');
// require('hchs-vue-charts');
// Vue.use(VueCharts);



Vue.component('search-product', require('./components/search-product.vue'));
Vue.component('single-cart', require('./components/single-cart.vue'));
Vue.component('sell-graphs', require('./components/sell-graphs.vue'));
Vue.component('print-slip', require('./components/printSlip.vue'));
Vue.component('sell-report', require('./components/sell-report.vue'));
Vue.component('customer-list', require('./components/customer-list.vue'));
Vue.component('vue-select', require("vue-select2"));


const app = new Vue({
    el: '#app'
});



$(document).ready(function() {
    $(".collapse_menu").on('click', function(){
        $("body").toggleClass("menu_collapsed");
    });

    $('.select2').select2();
    
});