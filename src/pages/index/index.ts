import Vue from 'vue';
import App from './App.vue';
import './index.scss';
import {images} from './images';
import {deferredPrompt} from "./service-worker";

Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount('#app');


export {
    images,
    deferredPrompt,
}
