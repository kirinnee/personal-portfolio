<template>
    <div class="full">
        <Pic class="background" uncenter type="w" :src="languages"></Pic>
        <div class="main">
            <CardHeader :dark="false" :index="Index" :title="Title" :subtitle="Subtitle" ref="header"></CardHeader>
            <div class="desc" ref="desc">
                Over my years of working with different organisations on various projects, I have gained experience with
                many languages.
                Below languages are those in which I am most confident, as I have spent a large amount of time coding in
                them, both professionally and personally.


            </div>
            <table>
                <tr class="head" ref="head">
                    <th></th>
                    <th>Production Experience</th>
                    <th>Understand Landscape and Toolchain</th>
                    <th>Over 10,000 LLOC</th>
                    <th>Side-Projects</th>
                    <th>Write without stack overflow</th>
                </tr>
                <template v-for="l in LanguageList">
                    <EmptyRow></EmptyRow>
                    <LanguageRow ref="lang" :lang-data="l"></LanguageRow>
                </template>

            </table>
        </div>
    </div>
</template>

<style lang='scss' scoped>

    .mobile {
        .background {
            width: 100%;
            left: 0;
        }

        .desc {
            margin: 80px 0;
            width: 95%;
            font-size: 30px;
        }

        table {
            width: 90%;

            th {
                font-size: 25px;
            }
        }

    }

    $p: (100% / 6);
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

    table {
        border-collapse: collapse;
        margin: 30px;
        font-family: Raleway, sans-serif;
        color: white;
        width: 50%;
        position: relative;
        left: 45%;
        transform: translateX(-50%);

        th {
            width: $p;
        }
    }

    .full {
        position: relative;
        overflow: hidden;
    }

    .background {
        opacity: 0.2;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 40%;
        width: 60%;
    }

    .head {
        opacity: 0;
    }

</style>

<script lang='ts'>
	import {Component, Vue} from 'vue-property-decorator';
	import CardHeader from "../../CardHeader.vue";
	import {StateManager} from "../../../../../classLibrary/StateManager";
	import {stateManager} from "../../../init";
	import {States} from "../../../../../classLibrary/States";
	import {images} from "../../../images";
	import LanguageRow from "./LanguageRow.vue";
	import EmptyRow from "./EmptyRow.vue";
	import {LangData} from "../../../../../classLibrary/LangData";
	import Pic from "../../Pic.vue";

	
	@Component({
		components: {Pic, EmptyRow, LanguageRow, CardHeader},
		props: {
			index: Number
		}
	})
	export default class Languages extends Vue {
		private state: StateManager = stateManager;
		private index?: number;

		data() {
			return {
				languages: images.languages,
			}
		}

		async trigger() {
			const header: any = this.$refs.header;
			if (!this.IsTriggered) {
				this.state.markTriggered(this.index!);
				await header.trigger();

				const h: HTMLElement = (this.$refs.head) as HTMLElement;
				const desc: HTMLElement = (this.$refs.desc) as HTMLElement;
				await Promise.all([
					desc.Opacity(0, 1, {duration: 400}).Promise,
					desc.Y(20, 0, {duration: 200}).Promise,
				]);
				await this.fadeIn(h);
				await Promise.all((this.$refs.lang as Vue[]).Map((e, i) => this.fadeIn(e.$el as HTMLElement, i * 100)));
			}
		}

		async fadeIn(elements: HTMLElement, wait: number = 0): Promise<void> {
			const w = {duration: wait};
			await Promise.all([
				elements.Wait(w).Y(-20, 0, {duration: 200}).Promise,
				elements.Wait(w).ScaleX(1.1, 1, {duration: 200}).Promise,
				elements.Wait(w).ScaleY(1.1, 1, {duration: 200}).Promise,
				elements.Wait(w).Opacity(0, 1, {duration: 200}).Promise,
			]);
		}

		get IsTriggered(): boolean {
			return this.state.checkTriggered(this.index!)
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
			return "The Bridge between Machines and Me";
		}

		get LanguageList(): LangData[] {
			return [
				new LangData([true, true, true, true, true], "#82b1ff", images.lang.rb),
				new LangData([true, true, true, true, true], "#60ba96", images.lang.cs),
				new LangData([true, true, true, true, true], "#e273a1", images.lang.ts),
				new LangData([true, false, true, true, false], "#e2b973", images.lang.java),
				new LangData([true, true, true, false, false], "#d573e2", images.lang.js),
				new LangData([false, false, true, true, false], "#e28573", images.lang.py),
			]
		}
	}
</script>
