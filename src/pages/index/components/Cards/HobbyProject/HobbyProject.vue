<template>
    <div class="full">
        <HobbyProjectBackground/>
        <div class="main">
            <CardHeader :dark="true" :index="Index" :title="Title" :subtitle="Subtitle" ref="header"/>
            <div ref="desc" class="desc">
                These are some project I did the little free time I have with my friend with the same passion. I take
                pride in delivering enterprise-grade applications - even if they are hobby projects.
            </div>
            <div class="hobbies">
                <HobbyProjectInstance ref="hob" v-for="(h,index) in Projects" :key="index" :hobby="h"/>
            </div>
        </div>
    </div>
</template>

<style lang='scss' scoped>
    .mobile {
        .desc {
            margin: 20px 0;
            width: 95%;
            font-size: 16px;
        }
    }

    .hobbies {
        justify-content: center;
        display: flex;
        flex-wrap: wrap;
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

    .full {
        position: relative;
        overflow: hidden;
        min-height: 100vh;
    }

</style>

<script lang='ts'>
    import {Component, Vue} from 'vue-property-decorator';
    import HobbyProjectBackground from "./HobbyProjectBackground.vue";
    import CardHeader from "../../CardHeader.vue";
    import {States} from "../../../../../classLibrary/States";
    import {StateManager} from "../../../../../classLibrary/StateManager";
    import {stateManager} from "../../../init";
    import HobbyProjectInstance from "./HobbyProjectInstance.vue";
    import {HobbyData} from "../../../../../classLibrary/HobbyData";
    import {hobbyMap} from "../../../HobbyMap";

    @Component({
        components: {HobbyProjectInstance, HobbyProjectBackground, CardHeader},
        props: {index: Number}
    })
    export default class Project extends Vue {
        private state: StateManager = stateManager;
        private index?: number;


        get IsTriggered(): boolean {
            return this.state!.checkTriggered(this.index!)
		}

		async trigger() {
			const header: any = this.$refs.header;
			if (!this.IsTriggered) {
				this.state!.markTriggered(this.index!);
				await header.trigger();
				const desc: HTMLElement = (this.$refs.desc) as HTMLElement;
				await Promise.all([
					desc.Opacity(0, 1, {duration: 400}).Promise,
					desc.Y(20, 0, {duration: 200}).Promise,
				]);
				const hobs = this.$refs.hob as Vue[];
				await Promise.all(hobs.Map((e, i) =>
					e.$el.Wait({duration: i * 200}).Opacity(0, 1, {duration: 500}).Promise
				));
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
			return "Personal Side Projects";
		}

		get Projects(): HobbyData[] {
			return hobbyMap;
		}

	}
</script>
