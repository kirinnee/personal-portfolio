<template>
    <div class="full">
        <SkillBackground></SkillBackground>
        <div class="main">
            <CardHeader :dark="true" :index="Index" :title="Title" :subtitle="Subtitle" ref="header"></CardHeader>
            <div class="nav-bar">
                <NavTab name="Backend" type="backend"></NavTab>
                <NavTab name="Devops" type="devops"></NavTab>
                <NavTab name="Frontend" type="frontend"></NavTab>
                <NavTab name="Mobile & IoT" type="mobile"></NavTab>
            </div>
            <div class="groups">
                <SkillGroup :skills="FrontEnd" ref="frontend"></SkillGroup>
            </div>

        </div>

    </div>
</template>

<style lang='scss' scoped>
    .center {
        width: 50%;
        left: 50%;
        position: relative;
        transform: translateX(-50%);
    }

    .nav-bar {
        @extend .center;
        margin-top: 50px;
        display: flex;
        justify-content: center;

    }

    .groups {
        margin-top: 40px;
        @extend .center;
    }

    .full {
        position: relative;
        height: 100vh;
    }


</style>

<script lang='ts'>
	import {Component, Vue} from 'vue-property-decorator';
	import CardHeader from "../../CardHeader.vue";
	import {StateManager} from "../../../../../classLibrary/StateManager";
	import {skillMap} from "../../../images";
	import {stateManager} from "../../../init";
	import {States} from "../../../../../classLibrary/States";
	import SkillGroup from "./SkillGroup.vue";
	import {SkillData} from "../../../../../classLibrary/SkillData";
	import NavTab from "./NavTab.vue";
	import SkillBackground from "./SkillBackground.vue";
	
	@Component({
		components: {SkillBackground, NavTab, SkillGroup, CardHeader},
		props: {index: Number}
	})
	export default class Skill extends Vue {
		private state?: StateManager;
		private index?: number;
		private selected?: { [s: string]: boolean } = {};

		get FrontEnd(): SkillData[] {
			const f = skillMap.fontend;
			return [
				f.babel,
				f.bootstrap,
				f.gulp,
				f.jquery,
				f.react,
				f.sass,
				f.vue
			]
		}

		data() {
			console.log(this.selected);
			return {
				state: stateManager,
				selected: {
					frontend: false,
					backend: true,
					devops: false,
					mobile: false
				}
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
				const frontend: any = this.$refs.frontend as Vue;
				frontend.trigger();
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
