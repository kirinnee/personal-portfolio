<template>
    <div class="full">
        <ProjectBackground></ProjectBackground>
        <div class="main">
            <CardHeader :dark="false" :index="Index" :title="Title" :subtitle="Subtitle" ref="header"></CardHeader>
            <div class="project-holder">
                <ProjectInstance ref="proj" v-for="(d,index) in Data" :key="index" :project-data="d"></ProjectInstance>
            </div>
            <PictureModal v-if="ShowModal" :pictures="Pictures"></PictureModal>
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
	import PictureModal from "./PictureModal.vue";
	import {projectMap} from "../../../ProjectMap";
	
	@Component({
		components: {PictureModal, ProjectInstance, ProjectBackground, CardHeader},
		props: {index: Number}
	})
	export default class Project extends Vue {
		private showModal = false;
		private state: StateManager = stateManager;
		private screenshots: string[] = [];
		private index?: number;


		get IsTriggered(): boolean {
			return this.state!.checkTriggered(this.index!)
		}

		async trigger() {
			const header: any = this.$refs.header;
			if (!this.IsTriggered) {
				this.state!.markTriggered(this.index!);
				await header.trigger();
				const projects = this.$refs.proj as Vue[];
				await Promise.all(projects.Map((e, i) =>
					e.$el.Wait({duration: i * 200}).Opacity(0, 1, {duration: 500}).Promise
				));
			}
		}

		get Data(): ProjectData[] {
			return projectMap;
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


		get ShowModal(): boolean {
			return this.showModal;
		}

		get Pictures(): string[] {
			return this.screenshots;
		}

		public ShowScreenshots(screenshot: string[]): void {
			this.screenshots = screenshot;
			this.showModal = true;
		}

		public Close(): void {
			this.showModal = false;
		}
	}
</script>
