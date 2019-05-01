<template>
    <Pic class="background" type="w" :src="skills" uncenter></Pic>
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
    }
</style>

<script lang='ts'>
	import {Component, Vue} from 'vue-property-decorator';
	import {images} from "../../../images";
	import Pic from "../../Pic.vue";
	
	@Component({
		components: {Pic}
	})
	export default class SkillBackground extends Vue {
		data() {
			return {
				skills: images.skill
			}
		}
	}
</script>
