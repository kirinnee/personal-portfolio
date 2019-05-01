<template>
    <a class="media" :href="Link" target="_blank" @mouseenter="hover=true" @mouseleave="hover=false">
        <Pic :src="NonHover" class="nonhover f" :style="nhStyle" uncenter type="b"></Pic>
        <Pic :src="Hover" class="hover f" :style="hStyle" uncenter type="b"></Pic>
    </a>
</template>

<style lang='scss' scoped>
    .f {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .media {
        position: relative;
    }

    .nonhover {
        opacity: 1;
        transition: opacity 0.3s;
    }

    .hover {
        opacity: 0;
        transition: opacity 0.3s;
    }
</style>

<script lang='ts'>
	import {Component, Vue} from 'vue-property-decorator';
	import {SocialData} from "../../../../../classLibrary/SocialData";
	import Pic from "../../Pic.vue";
	
	@Component({
		components: {Pic},
		props: {
			social: SocialData
		}
	})
	export default class SocialMedia extends Vue {
		private hover: boolean = false;
		private social?: SocialData;


		get Link(): string {
			return this.social!.link;
		}

		get Hover(): string {
			return this.social!.over;
		}

		get NonHover(): string {
			return this.social!.under;
		}

		get hStyle() {
			return {
				opacity: this.hover ? 1 : 0
			}
		}

		get nhStyle() {
			return {
				opacity: this.hover ? 0 : 1
			}

		}

	}
</script>
