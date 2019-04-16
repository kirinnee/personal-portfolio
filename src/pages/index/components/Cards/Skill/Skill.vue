<template>
    <div class="full">
        <SkillBackground></SkillBackground>
        <div class="main">
            <CardHeader :dark="true" :index="Index" :title="Title" :subtitle="Subtitle" ref="header"></CardHeader>
            <div class="nav-bar" ref="nav">
                <NavTab name="Backend" type="backend"></NavTab>
                <NavTab name="Devops" type="devops"></NavTab>
                <NavTab name="Frontend" type="frontend"></NavTab>
                <NavTab name="Mobile & IoT" type="mobile"></NavTab>
            </div>
            <div class="groups">
                <SkillGroup :skills="BackEnd" v-show="selected['backend']" ref="backend"></SkillGroup>
                <SkillGroup :skills="FrontEnd" v-show="selected['frontend']" ref="frontend"></SkillGroup>
                <SkillGroup :skills="DevOps" v-show="selected['devops']" ref="devops"></SkillGroup>
                <SkillGroup :skills="MobileIot" v-show="selected['mobile']" ref="mobile"></SkillGroup>
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
        opacity: 0;
        margin-top: 50px;
        display: flex;
        font-size: 20px;
        justify-content: center;

    }

    .groups {
        margin-top: 40px;
        @extend .center;
    }

    .full {
        position: relative;
        overflow: hidden;
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
		private selected?: { [s: string]: boolean };

		get MobileIot(): SkillData[] {
			const m = skillMap.mobileIot;
			return [m.android, m.arduino, m.ble, m.eeprom, m.flutter];
		}

		get DevOps(): SkillData[] {
			const d = skillMap.devops;
			return [d.docker, d.gitlab, d.aws, d.azureDevops,
				d.azure, d.digitalOcean, d.firebase, d.heroku]
		}

		get BackEnd(): SkillData[] {
			const b = skillMap.backend;
			return [b.dotnet, b.rails, b.node, b.express,
				b.swagger,
				b.mongodb, b.mysql, b.postgres, b.redis,
				b.nginx, b.apache, b.rabbitmq,];
		}

		get FrontEnd(): SkillData[] {
			const f = skillMap.fontend;
			return [f.vue, f.webpack, f.babel,
				f.sass, f.yarn, f.react,
				f.bootstrap, f.gulp, f.jquery]
		}

		data() {
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
				await (this.$refs.nav as HTMLElement).Opacity(0, 1, {duration: 200}).Promise;
				await this.playAnimation("backend");
			}
		}

		async playAnimation(s: string): Promise<void> {
			const x: any = this.$refs[s] as Vue;
			await x.trigger();
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
