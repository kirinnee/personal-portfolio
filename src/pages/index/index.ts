import Vue from 'vue';
import App from './App.vue';
import './index.scss';
import {images} from './images';

Vue.config.productionTip = false;


new Vue({
	render: h => h(App)
}).$mount('#app');


export {
	images
}
