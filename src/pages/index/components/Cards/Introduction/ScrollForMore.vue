<template>
    <div class="scroll-more">
        <div ref="parent" class="parent">
            <div>Scroll more to learn more</div>
            <div class="down-arrow-area">
                <div ref='downarrow' class="down-arrow-holder">
                    <img :src="downarrow" alt="Oops... cannot be found :<">
                </div>
            </div>
        </div>

    </div>
</template>

<style lang='scss' scoped>
    .scroll-more {
        .parent {
            opacity: 0;
            position: relative;
        }

        display: inline-block;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        color: white;
        font-family: Raleway, sans-serif;
        font-size: 16px;

        .down-arrow-area {
            position: relative;
            height: 45px;

            .down-arrow-holder {
                width: 30px;
                position: absolute;
                left: 50%;
                transform: translateX(-50%);

                img {
                    width: 100%;
                }
            }
        }
    }
</style>

<script lang='ts'>
	import {Component, Vue} from 'vue-property-decorator';
	import downarrow from "../../../assets/svg/down-arrow.svg";
	import {eases} from "../../../init";
	import {EaseStrength} from "@kirinnee/kease";
	
	@Component({})
	export default class ScrollForMore extends Vue {
		data() {
			return {
				downarrow,
			}
		}


		async appear(): Promise<void> {
			const parent: HTMLElement = this.$refs.parent as HTMLElement;
			const out = eases.EaseOut(EaseStrength.Quadratic);
			const down: HTMLElement = this.$refs.downarrow as HTMLElement;
			this.animate(down);
			await Promise.all([
				parent.Opacity(0, 1, {duration: 500, ease: out}).Promise,
				parent.Y(20, 0, {duration: 500, ease: out}).Promise,
				parent.ScaleX(1.1, 1, {duration: 400, ease: out}).Promise,
			]);

		}

		// noinspection InfiniteRecursionJS
		async animate(element: HTMLElement): Promise<void> {
			await element.Y(0, 25, {duration: 1000, ease: eases.EaseIn(EaseStrength.Quartic)}).Promise;
			element.Y(25, 0, {duration: 1000, ease: eases.EaseOut(EaseStrength.Quartic)}).Promise;
			await element.Wait({duration: 500}).Promise;
			this.animate(element)
		}
	}
</script>
