import {EaseStrength} from "@kirinnee/kease";
import {EaseStrength} from "@kirinnee/kease";
<template>
    <div class="header">
        <div class="invis index" :class="Theme" ref="index">{{index}}</div>
        <div class="invis title" :class="Theme" ref="title">{{title}}</div>
        <div class="invis subtitle" :class="Theme" ref="subtitle">{{subtitle}}</div>
    </div>
</template>

<style scoped lang="scss">
    .invis {
        opacity: 0;
    }

    .index {
        font-family: Raleway, sans-serif;
        font-size: 16px;
    }

    .title {
        font-family: Raleway, sans-serif;
        font-size: 16px;
        font-weight: 500;
        text-transform: uppercase;
    }

    .subtitle {
        font-size: 30px;
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
	import {asyncAnimator, eases} from "../init";
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

		get Theme() {
			return this.dark! ? "dark" : "light"
		}

		async trigger() {
			console.log("animation starting");
			const index = this.$refs.index as HTMLElement;
			const title = this.$refs.title as HTMLElement;
			const subtitle = this.$refs.subtitle as HTMLElement;
			const easeIn = eases.EaseIn(EaseStrength.Linear);
			await Promise.all([
				asyncAnimator.X(index, -20, 0, {duration: 200, ease: easeIn}),
				asyncAnimator.Opacity(index, 0, 0.6, {duration: 200, ease: easeIn}),
				asyncAnimator.X(title, -20, 0, {duration: 300, ease: easeIn}),
				asyncAnimator.Opacity(title, 0, 1, {duration: 300, ease: easeIn}),
			]);
			await Promise.all([
				asyncAnimator.Y(subtitle, -200, 0, {duration: 200, ease: easeIn}),
				asyncAnimator.Opacity(subtitle, -200, 0, {duration: 200, ease: easeIn})
			]);
			console.log("animation ended");


		}

	}
</script>
