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
					"At Innosparks, I was hired as a backend engineer. My role was to design and implement an API server for the OneHealth project, a digital platform for post-acute care for Singapore’s Ministry of Health. The project aimed at solving the hospital overpopulation problem as a result of Singapore’s ageing population. I also worked temporarily on their other project, Airbitat, to help develop a mobile application and firmware for controlling an outdoor cooler.  ",
					{
						month: "JUL",
						year: 2018
					}),
				new TimelineData("ChatInfinite, Axle", "Architect Consultant",
					"ChatInfinite is a company that provides conversational AI chatbots for businesses in the finance, insurance, telecommunications and services sectors. I was hired as an architecture consultant to advise and mentor the development team on how to improve server and infrastructure design." +
					"Within six months, I pushed for a move from JavaScript to TypeScript for the main server application to better implement domain-driven design. I held internal workshops to educate the team on Agile SDLC, SOLID and TDD practices and thus raise the average skill level of the organisation. I worked with the tech lead to set up GitLab Kanban and GitLab CI for automating and formalising the workflow I taught in my internal workshops.",
					{
						month: "JAN",
						year: 2018
					}, {
						month: "JUN",
						year: 2018
					}),
				new TimelineData("DAB Technology", "Full-Stack Developer",
					"DAB Technology is an SME that provides solutions to industrial and factory challenges, such as vacuum and lifting devices. Hired to remodel its static information site into an e-commerce platform, I gathered a team to build the platform by using domain-driven design and an iterative approach to achieving what the DAB desired.",
					{
						month: "APR",
						year: 2016
					},
					{
						month: "DEC",
						year: 2017
					}),
				new TimelineData("Sigma Value", "Full-Stack Developer",
					"Sigma Value is a professional trading technology solution that connects digital and emerging asset classes with the financial market. I joined as a web-based developer to help kick-start and prototype its product. As the sole developer of the company, I used a combination of Rails and Vue.js to build a platform for traders to discuss and share ideas.",
					{
						month: "APR",
						year: 2015
					},
					{
						month: "NOV",
						year: 2015
					}),
				new TimelineData("Singapore Beauty Fashion", "Frontend Developer",
					"As a freelancer, I worked for Singapore Beauty Fashion in creating two e-commerce platforms—Für 2 Für and AsiaBeau—as a frontend developer with React. Für 2 Für is a platform for pet lovers and pet caregivers to list and look for pet beauty services, whereas AsiaBeau is a platform for Singaporeans who seek to relax from their hectic, busy lives by looking for spa and massage services in nearby countries.",
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
			return "Past Work Experience";
		}
	}
</script>
