<template>
    <div class="background">
        <img :src="skills" alt="Oops, image not found...">
    </div>
</template>

<style lang='scss' scoped>

    .mobile {
        .background {
            top: 500px;
            width: 100%;
        }
    }

    .background {
        opacity: 0.1;
        position: absolute;
        transform: translate(-50%, 0);
        top: 100px;
        left: 50%;
        width: 50%;

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
