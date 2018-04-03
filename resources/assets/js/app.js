require('./bootstrap');

window.Vue = require('vue');


/**
 * Jquery Plugins
 */
require('print-js');
// select 2
window.select2 = require('select2');
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


Vue.component('sell-now' , require('./components/sells/SellNow.vue'));
Vue.component('products' , require('./components/sells/products.vue'));
Vue.component('customers' , require('./components/sells/customers.vue'));
Vue.component('category' , require('./components/sells/category.vue'));
Vue.component('shopping-card' , require('./components/sells/shopping-card.vue'));
Vue.component('barcode' , require('./components/sells/barcode-scanner.vue'));
Vue.component('cart' , require('./components/sells/cart.vue'));


const app = new Vue({
    el: '#app'
});


$(document).ready(function() {
    $(".collapse_menu").on('click', function(){
        $("body").toggleClass("menu_collapsed");
    });
    $('.select2').select2();
    
});