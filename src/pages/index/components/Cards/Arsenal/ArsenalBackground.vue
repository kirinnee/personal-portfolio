<template>
    <Pic :src="arsenal" class="background" uncenter type="w"></Pic>
</template>

<style lang='scss' scoped>
    .mobile {
        .background {
            width: 100%;
        }
    }

    .background {
        opacity: 0.2;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 50%;
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
	export default class ArsenalBackground extends Vue {

		data() {
			return {
				arsenal: images.arsenal
			}
		}
	}
</script>
