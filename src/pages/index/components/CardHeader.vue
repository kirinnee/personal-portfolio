<template>
    <div class="header">
        <div class="index invis" :class="Classes" ref="index">{{index}}</div>
        <div class="title invis" :class="Classes" ref="title">{{title}}</div>
        <div class="subtitle invis" :class="Classes" ref="subtitle">{{subtitle}}</div>
    </div>
</template>

<style scoped lang="scss">
    .header {
        display: inline-block;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
    }

    .invis {
        position: relative;
        opacity: 0;
    }

    .index {
        font-family: Raleway, sans-serif;
        font-size: 24px;
    }

    .title {
        font-family: Raleway, sans-serif;
        font-size: 24px;
        font-weight: 500;
        text-transform: uppercase;
    }

    .subtitle {
        font-size: 50px;
        font-family: Merriweather, serif;
        font-weight: 500;
    }

    .dark {
        color: black;
    }

    .light {
        color: white;
    }


    .mobile {

        .index {
            font-size: 35px;
        }

        .title {
            font-size: 35px;
        }

        .subtitle {
            font-size: 70px;
        }
    }

</style>

<script lang="ts">
	import {Component, Vue} from 'vue-property-decorator';
	import {eases} from "../init";
	import {EaseStrength} from "@kirinnee/kease";
	
	@Component({
		props: {
			dark: Boolean,
			index: String,
			title: String,
			subtitle: String
		}
	})
	export default class CardHeader extends Vue {
		private dark?: boolean;

		get Classes() {
			return (this.dark! ? "dark" : "light");
		}

		async trigger() {
			const index = this.$refs.index as HTMLElement;
			const title = this.$refs.title as HTMLElement;
			const subtitle = this.$refs.subtitle as HTMLElement;
			const easeOut = eases.EaseOut(EaseStrength.Quadratic);
			await Promise.all([
				index.Wait({duration: 50}).X(-30, 0, {duration: 400, ease: easeOut}).Promise,
				index.Wait({duration: 50}).Opacity(0, 0.6, {duration: 200, ease: easeOut}).Promise,
				title.Wait({duration: 200}).X(-30, 0, {duration: 400, ease: easeOut}).Promise,
				title.Wait({duration: 200}).Opacity(0, 1, {duration: 200, ease: easeOut}).Promise,
			]);
			subtitle.Y(20, 0, {duration: 500, ease: easeOut});
			await Promise.all([
				subtitle.Opacity(0, 1, {duration: 200, ease: easeOut}).Promise
			]);
		}

	}
</script>
