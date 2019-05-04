<template>
    <div class="full">
        <TimelineBackground></TimelineBackground>
        <div class="main">
            <CardHeader :dark="false" :index="Index" :subtitle="Subtitle" :title="Title" ref="header"></CardHeader>
            <div class="margin"></div>
            <TimelineInstance :info="t" :key="t.company" :last="index === WorkInfo.length -1" :left="index % 2 === 0" ref="instances" v-for="(t, index) in WorkInfo"></TimelineInstance>
        </div>
    </div>
</template>

<style lang='scss' scoped>

    .mobile {
        .full {
            min-height: auto;
        }
    }

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
		private state: StateManager = stateManager;
		private index?: number;


		get WorkInfo(): TimelineData[] {
			return [
				new TimelineData("Innosparks Lab, ST Engineering", "Software Developer",
					"At Innosparks, I was hired to be a backend engineer. My role was to design and implement an API server for the OneHealth project - a digital platform for post-acute care for Singapore's Ministry of Health, aimed at solving hospital overpopulation due to Singapore's ageing population. I also worked temporarily on their other project, Airbitat, to help develop a mobile application and firmware to control the outdoor cooler.", {
						month: "JUL",
						year: 2018
					}),
				new TimelineData("ChatInfinite, Axle", "Architect Consultant",
					"ChatInfinite is a company that provides conversational AI Chatbots for businesses in the Finance, Insurance, Telco and Services sector. I was hired as an architecture consultant to advise and mentor the team on how to improve server and infrastructure design. Within 6 months, I pushed for a move from Javascript to Typescript for the main server application to better implement Domain Driven Design. I held internal workshops to educate the team on Agile SDLC, SOLID and TDD practices to raise the average skill level of the organisation. I worked with the tech lead to setup GitLab Kanban and GitLab CI to automate and formalise the workflow I taught in my internal workshops.",
					{
						month: "JAN",
						year: 2018
					}, {
						month: "JUN",
						year: 2018
					}),
				new TimelineData("DAB Technology", "Full-Stack Developer",
					"DAB Technology is an SME that supply solution to industrial and factory challenges such as vacuum and lifting devices. Hired to remodel their static information site into an e-commerce platform, I gather a team to build the platform using Domain Driven Design and an iterative approach to achieving what the DAB desired.",
					{
						month: "APR",
						year: 2016
					},
					{
						month: "DEC",
						year: 2017
					}),
				new TimelineData("Sigma Value", "Full-Stack Developer",
					"Sigma Value is a professional trading technology solutions that connect digital and emerging asset classes with the financial market. I joined as a web-based developer to help kickstart and prototype their product. As the sole developer of the company, I used a combination of Rails and Vue.js to build a platform for traders to discuss and share ideas.",
					{
						month: "APR",
						year: 2015
					},
					{
						month: "NOV",
						year: 2015
					}),
				new TimelineData("Singapore Beauty Fashion", "Frontend Developer",
					"As a freelancer, I worked for Singapore Beauty Fashion to create two e-commerce platform as a frontend developer with react - Für 2 Für and AsiaBeau. Für 2 Für is a platform for pet lovers and pet caregivers to list and look for pet beauty services, while AsiaBeau is a platform for Singaporean who seek to relax from our hectic busy life to look for spa and massage service in nearby countries.",
					{
						month: "FEB",
						year: 2014
					},
					{
						month: "MAR",
						year: 2015
					}),
			];
		}

		get IsTriggered(): boolean {
			return this.state.checkTriggered(this.index!)
		}

		async trigger() {
			const header: any = this.$refs.header;
			if (!this.IsTriggered) {
				this.state.markTriggered(this.index!);
				await header.trigger();
				const timelineInstances: any[] = this.$refs.instances as Vue[];
				await timelineInstances.Each(e => e.play());
			}
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
			return "Past work experiences";
		}
	}
</script>
