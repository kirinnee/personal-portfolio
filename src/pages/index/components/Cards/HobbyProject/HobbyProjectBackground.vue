<template>
    <Pic :src="project" class="background" uncenter type="w"></Pic>
</template>

<style lang='scss' scoped>
    .mobile {
        .background {
            left: 50%;
            transform: translate(-50%, -50%);
            width: 90%;
        }
    }

    .background {
        opacity: 0.1;
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        width: 50%;
    }
</style>

<script lang='ts'>
	import {Component, Vue} from 'vue-property-decorator';
	import {images} from "../../../images";
	import Pic from "../../Pic.vue";
	
	@Component({
		components: {Pic}
	})
	export default class HobbyProjectBackground extends Vue {
		data() {
			return {project: images.hobby}
		}
	}
</script>
