<template>
    <div class="full">
        <ArsenalBackground></ArsenalBackground>
        <div class="main">
            <CardHeader :dark="false" :index="Index" :title="Title" :subtitle="Subtitle" ref="header"></CardHeader>
            <div ref="desc" class="desc">
                dolor sit amet, consectetur adipiscing elit. Nam ultricies neque sed justo consequat, tristique laoreet
                mi aliquet. Sed nec posuere dolor, id sagittis turpis. Aliquam odio magna, tincidunt in commodo vitae,
                tincidunt in mi.
            </div>
            <div class="library-holder">
                <Library v-for="(l, index) in Libraries" :key="index" :lib="l" ref="lib"></Library>
            </div>
        </div>
    </div>
</template>

<style lang='scss' scoped>

    .mobile {
        .desc {
            margin: 80px 0;
            width: 95%;
            font-size: 30px;
        }

        .library-holder {
            width: 95%;
            justify-content: center;
        }
    }


    .library-holder {
        position: relative;
        width: 1200px;
        left: 50%;
        transform: translateX(-50%);
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
        color: white;
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
	import CardHeader from "../../CardHeader.vue";
	import {States} from "../../../../../classLibrary/States";
	import {StateManager} from "../../../../../classLibrary/StateManager";
	import {stateManager} from "../../../init";
	import ArsenalBackground from "./ArsenalBackground.vue";
	import {LibraryData} from "../../../../../classLibrary/LibraryData";
	import {libraryMap} from "../../../LibraryMap";
	import Library from "./Library.vue";
	
	@Component({
		components: {Library, ArsenalBackground, CardHeader},
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

		get Libraries(): LibraryData[] {
			return libraryMap;
		}

	}
</script>
