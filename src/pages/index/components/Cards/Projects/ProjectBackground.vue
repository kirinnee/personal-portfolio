<template>
    <div class="background">
        <img :src="project" alt="Oops, image not found...">
    </div>
</template>

<style lang='scss' scoped>
    .background {
        opacity: 0.2;
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        height: 100%;
        left: 50%;

        img {
            width: auto;
            max-height: 100%;
        }
    }
</style>

<script lang='ts'>
	import {Component, Vue} from 'vue-property-decorator';
	import {images} from "../../../images";
	
	@Component({})
	export default class ProjectBackground extends Vue {
		data() {
			return {
				project: images.project
			}
		}
	}
</script>
