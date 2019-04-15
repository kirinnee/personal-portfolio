<template>
    <div class="full">
        <div class="background">
            <img :src="languages" alt="Oops, image not found...">
        </div>
        <div class="main">
            <CardHeader :dark="false" :index="Index" :title="Title" :subtitle="Subtitle" ref="header"></CardHeader>
            <table>
                <tr class="head" ref="head">
                    <th></th>
                    <th>Production Experience</th>
                    <th>Understand Landscape and Toolchain</th>
                    <th>Over 10,000 LLOC</th>
                    <th>Side-Projects</th>
                    <th>Write without stack overflow</th>
                </tr>
                <EmptyRow></EmptyRow>
                <LanguageRow ref='ruby' color="#60ba96" hoverColor="black" :ticks="[true, true, true, true, true]" image="devicon-ruby-plain"></LanguageRow>
                <EmptyRow></EmptyRow>
                <LanguageRow ref='csharp' color="#82b1ff" hoverColor="black" :ticks="[true, true, true, true, true]" image="devicon-csharp-plain"></LanguageRow>
                <EmptyRow></EmptyRow>
                <LanguageRow ref='ts' color="#e2b973" hoverColor="black" :ticks="[true, true, true, true, true]" image="devicon-typescript-plain"></LanguageRow>
                <EmptyRow></EmptyRow>
                <LanguageRow ref='java' color="#7389e2" hoverColor="black" :ticks="[true, false, true, true, false]" image="devicon-java-plain"></LanguageRow>
                <EmptyRow></EmptyRow>
                <LanguageRow ref='js' color="#e273a1" hoverColor="black" :ticks="[true, true, true, true, false]" image="devicon-javascript-plain"></LanguageRow>
                <EmptyRow></EmptyRow>
                <LanguageRow ref='cpp' color="#d573e2" hoverColor="black" :ticks="[true, false, false, false, false]" image="devicon-cplusplus-plain"></LanguageRow>
                <EmptyRow></EmptyRow>
                <LanguageRow ref='py' color="#9b73e2" hoverColor="black" :ticks="[false, false, true, true, false]" image="devicon-python-plain"></LanguageRow>
                <EmptyRow></EmptyRow>
                <LanguageRow ref='php' color="#e28573" hoverColor="black" :ticks="[true, false, true, false, false]" image="devicon-php-plain"></LanguageRow>

            </table>
        </div>
    </div>
</template>

<style lang='scss' scoped>

    $p: (100% / 6);

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

        img {
            height: auto;
            max-width: 100%;
        }
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

	
	@Component({
		components: {EmptyRow, LanguageRow, CardHeader},
		props: {
			index: Number
		}
	})
	export default class Languages extends Vue {
		private state?: StateManager;
		private index?: number;

		data() {
			return {
				state: stateManager,
				languages: images.languages,
			}
		}

		async trigger() {
			const header: any = this.$refs.header;
			if (!this.IsTriggered) {
				this.state!.markTriggered(this.index!);
				await header.trigger();
				const ruby: HTMLElement = (this.$refs.ruby as Vue).$el as HTMLElement;
				const cs: HTMLElement = (this.$refs.csharp as Vue).$el as HTMLElement;
				const ts: HTMLElement = (this.$refs.ts as Vue).$el as HTMLElement;
				const java: HTMLElement = (this.$refs.java as Vue).$el as HTMLElement;
				const js: HTMLElement = (this.$refs.js as Vue).$el as HTMLElement;
				const cpp: HTMLElement = (this.$refs.cpp as Vue).$el as HTMLElement;
				const py: HTMLElement = (this.$refs.py as Vue).$el as HTMLElement;
				const php: HTMLElement = (this.$refs.php as Vue).$el as HTMLElement;
				const h: HTMLElement = (this.$refs.head) as HTMLElement;
				await this.fadeIn(h);
				await this.fadeIn(ruby);
				await this.fadeIn(cs);
				await this.fadeIn(ts);
				await this.fadeIn(java);
				await this.fadeIn(js);
				await this.fadeIn(cpp);
				await this.fadeIn(py);
				await this.fadeIn(php);
			}
		}

		async fadeIn(elements: HTMLElement): Promise<void> {
			await Promise.all([
				elements.Y(-20, 0, {duration: 200}).Promise,
				elements.ScaleX(1.1, 1, {duration: 200}).Promise,
				elements.ScaleY(1.1, 1, {duration: 200}).Promise,
				elements.Opacity(0, 1, {duration: 200}).Promise,
			]);
		}

		get IsTriggered(): boolean {
			return this.state!.checkTriggered(this.index!)
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
