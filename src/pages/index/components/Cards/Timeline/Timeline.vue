<template>
    <div class="full">
        <TimelineBackground></TimelineBackground>
        <div class="main">
            <CardHeader :dark="false" :index="Index" :title="Title" :subtitle="Subtitle" ref="header"></CardHeader>
            <TimelineInstance v-for="(t, index) in WorkInfo" :key="t.company" :left="index % 2 === 0" :info="t" ref="instances"></TimelineInstance>
        </div>
    </div>
</template>

<style lang='scss' scoped>
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
				new TimelineData("abc", "dev", "Lorem Ipsum", {month: "JAN", year: 2019}),
				new TimelineData("abcd", "dev", "Lorem Ipsum", {month: "JAN", year: 2019}),
				new TimelineData("abcde", "dev", "Lorem Ipsum", {month: "JAN", year: 2019}),
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
