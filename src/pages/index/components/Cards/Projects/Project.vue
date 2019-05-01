<template>
    <div class="full">
        <ProjectBackground></ProjectBackground>
        <div class="main">
            <CardHeader :dark="false" :index="Index" :title="Title" :subtitle="Subtitle" ref="header"></CardHeader>
            <div class="project-holder">
                <ProjectInstance v-for="(d,index) in Data" :key="index" :project-data="d"></ProjectInstance>
            </div>
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
	import ProjectBackground from "./ProjectBackground.vue";
	import CardHeader from "../../CardHeader.vue";
	import {States} from "../../../../../classLibrary/States";
	import {StateManager} from "../../../../../classLibrary/StateManager";
	import {stateManager} from "../../../init";
	import ProjectInstance from "./ProjectInstance.vue";
	import {ProjectData} from "../../../../../classLibrary/ProjectData";
	import {images} from "../../../images";
	
	@Component({
		components: {ProjectInstance, ProjectBackground, CardHeader},
		props: {index: Number}
	})
	export default class Project extends Vue {
		private state?: StateManager;
		private index?: number;

		data() {
			return {
				state: stateManager,
			}
		}


		get IsTriggered(): boolean {
			return this.state!.checkTriggered(this.index!)
		}

		async trigger() {
			const header: any = this.$refs.header;
			if (!this.IsTriggered) {
				this.state!.markTriggered(this.index!);
				await header.trigger();
			}
		}

		get Data(): ProjectData[] {
			const ph = "Nulla sapien nunc, feugiat in bibendum eu, dignissim a sem. Praesent porttitor tristique cursus. Sed lorem ipsum, mattis ut porta at, viverra a nisl. Donec sem orci, dictum id purus vitae, placerat pharetra sem. Pellentesque quis auctor justo. Praesent non dictum erat. Sed condimentum laoreet lectus ut faucibus. Suspendisse sed hendrerit est. Pellentesque magna velit, ullamcorper nec ullamcorper id, commodo eget risus.";
			return [
				new ProjectData("", images.projects.onehealth, ph, [images.lang.cpp, images.lang.js, images.lang.py]),
				new ProjectData("", images.projects.onehealth, ph, [images.lang.cpp, images.lang.js, images.lang.py]),
				new ProjectData("", images.projects.onehealth, ph, [images.lang.cpp, images.lang.js, images.lang.py]),
				new ProjectData("", images.projects.onehealth, ph, [images.lang.cpp, images.lang.js, images.lang.py]),
			]
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
