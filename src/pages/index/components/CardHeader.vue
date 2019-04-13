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
        opacity: 0.6;
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
				index.Wait({duration: 150}).X(-30, 0, {duration: 500, ease: easeOut}).Promise,
				index.Wait({duration: 150}).Opacity(0, 0.6, {duration: 300, ease: easeOut}).Promise,
				title.Wait({duration: 350}).X(-30, 0, {duration: 500, ease: easeOut}).Promise,
				title.Wait({duration: 350}).Opacity(0, 1, {duration: 300, ease: easeOut}).Promise,
			]);
			await Promise.all([
				subtitle.Y(20, 0, {duration: 500, ease: easeOut}).Promise,
				subtitle.Opacity(0, 1, {duration: 200, ease: easeOut}).Promise
			]);
		}

	}
</script>
