<template>
    <div class="timeline-instance">

        <div class="holder right" v-if="!Mobile" :style="Style">
            <TimelineSide ref="left" :left="true" :mobile="Mobile" :company="left" :timeline="Info"/>
        </div>
        <div class="partition">
            <div class="bar" ref="bar"></div>
            <div class="dot" ref="dot"></div>
        </div>
        <div class="holder left">
            <TimelineSide ref="right" :left="false" :mobile="Mobile" :company="!left" :timeline="Info"/>
        </div>
    </div>
</template>

<style lang='scss' scoped>

    .mobile {
        .holder {
            padding-bottom: 40px;
            width: 80%;
        }

        .timeline-instance {
            justify-content: flex-start;
        }

        .partition {
            width: 45px;
            position: relative;

            .dot {
                width: 16px;
                height: 16px;
            }

            .bar {
                width: 1px;
            }
        }
    }

    $ds: 20px;
    .holder {
        font-family: Raleway, sans-serif;
        box-sizing: border-box;
        padding-bottom: 40px;

        &.right {
            text-align: right;
        }

        &.left {
            text-align: left;
        }

        width: 400px;
        overflow: hidden;
        position: relative;
        float: left;

        .bound {
            width: 100%;
            height: 100%;
            position: relative;
        }
    }

    .middle {
        left: 50%;
        transform: translateX(-50%);
    }

    .timeline-instance {
        color: white;

        min-height: 5vh;
        overflow: hidden;
        position: relative;
        display: flex;
        justify-content: center;
    }

    .partition {
        width: 30px;
        position: relative;

        .dot {
            @extend .middle;
            width: $ds;
            height: $ds;
            position: absolute;
            top: 20px;
            background: white;
            border-radius: 50%;
            opacity: 0;
        }

        .bar {
            @extend .middle;
            opacity: 0;
            height: 100%;
            width: 1px;
            background: white;
            position: relative;
        }
    }


</style>

<script lang='ts'>
    import {Component, Vue} from 'vue-property-decorator';
    import {TimelineData} from "../../../../../classLibrary/TimelineData";
    import TimelineSide from "./TimelineSide.vue";
    import {$$, eases, isMobile} from "../../../init";
    import {EaseStrength} from "@kirinnee/kease";

    class Dud {
        async play(): Promise<void> {
            await $$(0);
        }
    }

    @Component({
        components: {TimelineSide},
        props: {
            info: TimelineData,
            left: Boolean,
            last: Boolean,
        }
    })
    export default class TimelineInstance extends Vue {
        private info?: TimelineData;
        private last?: boolean;

        async play(): Promise<void> {
			const left: any = this.$refs.left || new Dud();
			const right: any = this.$refs.right;
			const easeOut = eases.EaseOut(EaseStrength.Linear);
			await (this.$refs.bar as HTMLElement).Opacity(0, 1, {duration: 50}).Promise;
			await Promise.all([
				(this.$refs.dot as HTMLElement).Opacity(0, 1, {duration: 300, ease: easeOut}).Promise,
				(this.$refs.dot as HTMLElement).Y(10, 0, {duration: 300, ease: easeOut}).Promise,
			]);
			await Promise.all([
				left.play(),
				right.play()
			])
		}

		get Style() {
			return {
				paddingBottom: this.last ? "0" : "40px"
			}
		}

		get Info(): TimelineData {
			return this.info!;
		}

		get Mobile(): boolean {
			return isMobile();
		}
	}
</script>
