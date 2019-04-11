import Vue from 'vue';
import App from './App.vue';
// @ts-ignore
import VueWaypoint from 'vue-waypoint';
import './index.scss';
import {images} from './images';

Vue.use(VueWaypoint);
Vue.config.productionTip = false;


new Vue({
	render: h => h(App)
}).$mount('#app');

export {
	images
}
