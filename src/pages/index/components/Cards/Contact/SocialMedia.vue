<template>
    <a class="media" :href="Link" target="_blank" @mouseenter="hover=true" @mouseleave="hover=false">
        <div class="nonhover f" :style="nhStyle">
            <img :src="NonHover" alt="Oops, image cannot be found :<">
        </div>
        <div class="hover f" :style="hStyle">
            <img :src="Hover" alt="Oops, image cannot be found :<">
        </div>
    </a>
</template>

<style lang='scss' scoped>
    .f {
        position: absolute;
        width: 100%;
        height: 100%;

        img {
            width: 100%;
            height: 100%;
        }
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
	
	@Component({
		props: {
			social: SocialData
		}
	})
	export default class SocialMedia extends Vue {
		private hover?: boolean;
		private social?: SocialData;

		data() {
			return {
				hover: false,
			}
		}

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
				opacity: this.hover! ? 1 : 0
			}
		}

		get nhStyle() {
			return {
				opacity: this.hover! ? 0 : 1
			}

		}

	}
</script>
