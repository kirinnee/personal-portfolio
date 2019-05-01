<template>
    <Pic :src="contact" class="background" type="h"></Pic>
</template>

<style lang='scss' scoped>
    .background {
        opacity: 0.2;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        height: 100%;
        left: 50%;
    }
</style>

<script lang='ts'>
	import {Component, Vue} from 'vue-property-decorator';
	import {images} from "../../../images";
	import Pic from "../../Pic.vue";
	
	@Component({
		components: {Pic}
	})
	export default class ContactBackground extends Vue {
		data() {
			return {
				contact: images.contact
			}
		}
	}
</script>
