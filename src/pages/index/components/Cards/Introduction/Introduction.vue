<template>
    <div class="introduction">
        <div class="background">
            <img :src="introduction" alt="Oops, image cannot be found :<">
        </div>
        <div class="intro-holder">
            <div class="basic" ref="d1">Hello!</div>
            <div class="basic" ref="d2">My name is</div>
            <div class="name" ref="d3">Ernest Ng</div>
            <div class="basic" ref="d4">and I am a</div>
            <div class="title" ref="d5">Backend Engineer</div>
        </div>
        <ScrollForMore ref="scroll" class="scroll-for-more"></ScrollForMore>
    </div>
</template>

<style lang='scss' scoped>

    .mobile {
        .background {

            width: 100%;
            height: auto;

            img {
                max-height: none;
                max-width: 100%;
                width: auto;
                height: auto;
            }
        }

        .introduction {

            .intro-holder {
                width: 100%;

                .basic {
                    font-size: 60px;
                    margin: 60px;
                }

                .name {
                    font-size: 120px;
                }

                .title {
                    font-size: 100px;
                }
            }

        }
    }

    .background {
        position: absolute;
        height: 90%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        opacity: 0.2;

        img {
            max-height: 100%;
            width: auto;
        }
    }

    .introduction {
        overflow: visible;
        color: white;
        position: relative;
        width: 100vw;
        min-height: 100vh;
        text-align: center;

        .intro-holder {
            position: absolute;
            display: inline-block;
            left: 50%;
            top: 40%;
            transform: translate(-50%, -50%);

            .basic {
                position: relative;
                opacity: 0;
                font-family: Raleway, sans-serif;
                font-size: 30px;
                margin: 10px;
            }

            .name {
                position: relative;
                opacity: 0;
                font-family: 'Rozha One', serif;
                font-size: 80px;
                font-weight: 900;
            }

            .title {
                position: relative;
                opacity: 0;
                font-family: 'Open Sans', sans-serif;
                font-size: 50px;
                font-weight: 900;
            }
        }

    }
</style>

<script lang='ts'>
	import {Component, Vue} from 'vue-property-decorator';
	import ScrollForMore from "./ScrollForMore.vue";
	import {eases, stateManager} from "../../../init";
	import {images} from "../../../images";
	import {StateManager} from "../../../../../classLibrary/StateManager";
	import {EaseStrength} from "@kirinnee/kease";

	@Component({
		components: {ScrollForMore},
		props: {
			index: Number
		}
	})
	export default class Introduction extends Vue {
		private state: StateManager = stateManager;
		private index?: number;

		async trigger() {
			if (!this.IsTriggered) {
				const d1: HTMLElement = this.$refs.d1 as HTMLElement;
				const d2: HTMLElement = this.$refs.d2 as HTMLElement;
				const d3: HTMLElement = this.$refs.d3 as HTMLElement;
				const d4: HTMLElement = this.$refs.d4 as HTMLElement;
				const d5: HTMLElement = this.$refs.d5 as HTMLElement;
				const scroll: ScrollForMore = (this.$refs.scroll) as ScrollForMore;
				this.state!.markTriggered(this.index!);
				const out = eases.EaseOut(EaseStrength.Quadratic);
				await Promise.all([
					d1.Opacity(0, 1, {duration: 700, ease: out}).Promise,
					d1.Y(-30, 0, {duration: 700, ease: out}).Promise
				]);
				await Promise.all([
					d2.Opacity(0, 1, {duration: 700, ease: out}).Promise,
					d2.Y(20, 0, {duration: 700, ease: out}).Promise,
					d2.ScaleX(1.1, 1, {duration: 500, ease: out}).Promise,
				]);
				await Promise.all([
					d3.Opacity(0, 1, {duration: 700, ease: out}).Promise,
					d3.Y(-30, 0, {duration: 700, ease: out}).Promise
				]);
				await Promise.all([
					d4.Opacity(0, 1, {duration: 700, ease: out}).Promise,
					d4.Y(20, 0, {duration: 700, ease: out}).Promise,
					d4.ScaleX(1.1, 1, {duration: 500, ease: out}).Promise,
				]);
				await Promise.all([
					d5.Opacity(0, 1, {duration: 700, ease: out}).Promise,
					d5.ScaleX(1.2, 1, {duration: 500, ease: out}).Promise,
					d5.ScaleY(1.2, 1, {duration: 500, ease: out}).Promise,
				]);
				await (scroll as any).appear();
			}
		}

		data() {
			return {
				introduction: images.introduction,
			}
		}

		get IsTriggered(): boolean {
			return this.state.checkTriggered(this.index!)
		}


	}
</script>
