<template>
    <div class="full">
        <SkillBackground/>
        <div class="main">
            <CardHeader :dark="true" :index="Index" :title="Title" :subtitle="Subtitle" ref="header"/>
            <div class="desc" ref="desc">
                Although I specialise mainly in backend and infrastructure development, I have also spent much time
                exploring frontend tooling and frameworks. Given below are the skillsets I have used in production
                projects or personal side projects. The little bar shows the experience I have in using the tool
                relative to the rest of the list.
            </div>
            <div class="nav-bar" ref="nav">
                <NavTab name="Backend" type="backend" :dark="true"/>
                <NavTab name="Devops" type="devops" :dark="true"/>
                <NavTab name="Frontend" type="frontend" :dark="true"/>
                <NavTab name="Mobile & IoT" type="mobile" :dark="true"/>
            </div>
            <div class="groups">
                <SkillGroup :skills="BackEnd" v-show="selected['backend']" ref="backend"/>
                <SkillGroup :skills="FrontEnd" v-show="selected['frontend']" ref="frontend"/>
                <SkillGroup :skills="DevOps" v-show="selected['devops']" ref="devops"/>
                <SkillGroup :skills="MobileIot" v-show="selected['mobile']" ref="mobile"/>
            </div>

        </div>

    </div>
</template>

<style lang='scss' scoped>

    .mobile {
        .desc {
            margin-top: 20px;
            width: 90%;
            font-size: 18px;
        }

        .nav-bar {
            margin-top: 20px;
            width: 90%;

        }

        .groups {
            margin-top: 20px;
            width: 90%;
        }
    }

    .desc {
        opacity: 0;
        margin: 40px 0;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        width: 50%;
        font-family: Raleway, sans-serif;
        font-size: 20px;
        color: black;
        text-align: center;
    }

    .center {
        left: 50%;
        position: relative;
        transform: translateX(-50%);
    }

    .nav-bar {
        @extend .center;
        width: 50%;
        opacity: 0;
        margin-top: 50px;
        display: flex;
        font-size: 20px;
        justify-content: center;

    }

    .groups {
        @extend .center;
        margin-top: 40px;
        width: 50%;
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
    import {stateManager} from "../../../init";
    import {States} from "../../../../../classLibrary/States";
    import SkillGroup from "./SkillGroup.vue";
    import {SkillData} from "../../../../../classLibrary/SkillData";
    import NavTab from "../../NavTab.vue";
    import SkillBackground from "./SkillBackground.vue";
    import {skillMap} from "../../../SkillMap";

    @Component({
        components: {SkillBackground, NavTab, SkillGroup, CardHeader},
        props: {index: Number}
    })
    export default class Skill extends Vue {
        private state: StateManager = stateManager;
        private index?: number;
        private selected: { [s: string]: boolean } = {
            frontend: false,
            backend: true,
            devops: false,
            mobile: false
        };

        get MobileIot(): SkillData[] {
            const m = skillMap.mobileIot;
            return [m.android, m.arduino, m.ble, m.eeprom, m.flutter];
        }

        get DevOps(): SkillData[] {
            const d = skillMap.devops;
			return [d.docker, d.gitlab, d.aws, d.azureDevops,
                d.azure, d.digitalOcean, d.firebase, d.heroku, d.ansible]
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

		get IsTriggered(): boolean {
			return this.state.checkTriggered(this.index!)
		}

		async trigger() {
			const header: any = this.$refs.header;
			if (!this.IsTriggered) {
				this.state.markTriggered(this.index!);
				await header.trigger();
				const desc: HTMLElement = (this.$refs.desc) as HTMLElement;
				await Promise.all([
					desc.Opacity(0, 1, {duration: 400}).Promise,
					desc.Y(20, 0, {duration: 200}).Promise,
				]);
				await (this.$refs.nav as HTMLElement).Opacity(0, 1, {duration: 200}).Promise;
				await this.playAnimation("backend");
			}
		}

		async playAnimation(s: string): Promise<void> {
			const x: any = this.$refs[s] as Vue;
			await x.trigger();
		}

		get State(): States {
			return this.state.data[this.index!];
		}

		get Title(): string {
			return this.State.name;
		}

		get Index(): string {
			const s = this.State.index.toString();
			return this.State.index < 10 ? "0" + s : s;
		}

		get Subtitle(): string {
			return "Tools of the Trade";
		}
	}
</script>
