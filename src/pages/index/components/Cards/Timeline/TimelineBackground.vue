<template>
    <div class="background">
        <img :src="skills" alt="Oops, image not found...">
    </div>
</template>

<style lang='scss' scoped>
    .background {
        opacity: 0.2;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        left: 50%;
        width: 80%;

        img {
            max-width: 100%;
            height: auto;
        }
    }
</style>

<script lang='ts'>
	import {Component, Vue} from 'vue-property-decorator';
	import {images} from "../../../images";
	
	@Component({})
	export default class SkillBackground extends Vue {
		data() {
			return {
				skills: images.skill
			}
		}
	}
</script>
