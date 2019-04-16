<template>
    <div class="full">
        <TimelineBackground></TimelineBackground>
        <div class="main">
            <CardHeader :dark="false" :index="Index" :title="Title" :subtitle="Subtitle" ref="header"></CardHeader>
            <div class="margin"></div>
            <TimelineInstance v-for="(t, index) in WorkInfo" :key="t.company" :left="index % 2 === 0" :last="index === WorkInfo.length -1" :info="t" ref="instances"></TimelineInstance>
        </div>
    </div>
</template>

<style lang='scss' scoped>
    .margin {
        height: 40px;
    }
    .full {
        position: relative;
        overflow: hidden;
        min-height: 100vh;
    }
</style>

<script lang='ts'>
	import {Component, Vue} from 'vue-property-decorator';
	import TimelineInstance from "./TimelineInstance.vue";
	import TimelineBackground from "./TimelineBackground.vue";
	import CardHeader from "../../CardHeader.vue";
	import {StateManager} from "../../../../../classLibrary/StateManager";
	import {stateManager} from "../../../init";
	import {States} from "../../../../../classLibrary/States";
	import {TimelineData} from "../../../../../classLibrary/TimelineData";
	
	@Component({
		components: {TimelineBackground, TimelineInstance, CardHeader},
		props: {index: Number}
	})
	export default class Timeline extends Vue {
		private state?: StateManager;
		private index?: number;

		data() {
			return {
				state: stateManager
			}
		}

		get WorkInfo(): TimelineData[] {
			return [
				new TimelineData("Innosparks Lab, ST Engineering", "Software Developer", "Nulla sapien nunc, feugiat in bibendum eu, dignissim a sem. Praesent porttitor tristique cursus. Sed lorem ipsum, mattis ut porta at, viverra a nisl. Donec sem orci, dictum id purus vitae, placerat pharetra sem. Pellentesque quis auctor justo. Praesent non dictum erat. Sed condimentum laoreet lectus ut faucibus. Suspendisse sed hendrerit est. Pellentesque magna velit, ullamcorper nec ullamcorper id, commodo eget risus.", {
					month: "JAN",
					year: 2019
				}),
				new TimelineData("ChatInfinite, Axle", "Architect Consultant", "Nulla sapien nunc, feugiat in bibendum eu, dignissim a sem. Praesent porttitor tristique cursus. Sed lorem ipsum, mattis ut porta at, viverra a nisl. Donec sem orci, dictum id purus vitae, placerat pharetra sem. Pellentesque quis auctor justo. Praesent non dictum erat. Sed condimentum laoreet lectus ut faucibus. Suspendisse sed hendrerit est. Pellentesque magna velit, ullamcorper nec ullamcorper id, commodo eget risus.", {
					month: "JAN",
					year: 2019
				}),
				new TimelineData("DAB Technology", "Full-Stack Developer", "Nulla sapien nunc, feugiat in bibendum eu, dignissim a sem. Praesent porttitor tristique cursus. Sed lorem ipsum, mattis ut porta at, viverra a nisl. Donec sem orci, dictum id purus vitae, placerat pharetra sem. Pellentesque quis auctor justo. Praesent non dictum erat. Sed condimentum laoreet lectus ut faucibus. Suspendisse sed hendrerit est. Pellentesque magna velit, ullamcorper nec ullamcorper id, commodo eget risus.", {
					month: "JAN",
					year: 2019
				}),
			];
		}

		get IsTriggered(): boolean {
			return this.state!.checkTriggered(this.index!)
		}

		async trigger() {
			const header: any = this.$refs.header;
			if (!this.IsTriggered) {
				this.state!.markTriggered(this.index!);
				await header.trigger();
				const timelineInstances: any[] = this.$refs.instances as Vue[];
				await timelineInstances.Each(e => e.play());
			}
		}

		get State(): States {
			return this.state!.data[this.index!];
		}

		get Title(): string {
			return this.State.name;
		}

		get Index(): string {
			const s = this.State.index.toString();
			return this.State.index < 10 ? "0" + s : s;
		}

		get Subtitle(): string {
			return "Lorem ipsum dolor";
		}
	}
</script>
