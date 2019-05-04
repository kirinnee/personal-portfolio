<template>
    <div class="full">
        <div class="main">
            <CardHeader :dark="true" :index="Index" :title="Title" :subtitle="Subtitle" ref="header"></CardHeader>
            <div class="description" ref="desc">
                <p>
                    Hello, I am <b>Ernest</b> from Singapore - Garden City!
                    I am a software developer specialising in <b>backend and infrastructure architecture</b>.
                </p>
                <p>
                    Since the age of ten, I have been enchanted by the process of crafting new things. I quickly picked
                    up the basics of software development. From there, my small ventures quickly grew to multiple side
                    projects in Minecraft giga-mods and large-scale templating ecosystem, which I obsess over in my free
                    time.

                <p>
                    I am also <b>passionate about open-source.</b> By making their discussions and code publicly
                    available, the open-source community has significantly contributed to my growth as a software
                    engineer. All of my toolings, libraries and side projects are <b>fully open-sourced on GitLab</b>. I
                    am aiming to contribute significantly to an open-source codebase in the coming year!
                </p>
            </div>
        </div>
        <Pic class="background" :src="aboutme" type="w" uncenter></Pic>
    </div>
</template>

<style scoped lang="scss">

    .mobile {
        .background {
            width: 100%;

        }

        .description {
            width: 120%;
            font-size: 35px;
        }
    }

    .background {
        position: relative;
        opacity: 0.1;
        width: 40%;
        overflow: visible;

        img {
            max-width: 100%;
            height: auto;
            position: relative;
        }
    }

    .description {
        margin-top: 60px;
        display: block;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        width: 50%;
        text-align: center;
        font-family: Raleway, sans-serif;
        letter-spacing: 1px;
        font-size: 20px;
        opacity: 0;
    }

    .full {
        width: 100vw;
    }

    .main {
        width: 70%;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }


</style>

<script lang="ts">
	import {Component, Vue} from 'vue-property-decorator';
	import CardHeader from "../../CardHeader.vue";
	import {eases, stateManager} from "../../../init";
	import {StateManager} from "../../../../../classLibrary/StateManager";
	import {States} from "../../../../../classLibrary/States";
	import {EaseStrength} from "@kirinnee/kease";
	import {images} from '../../../images';
	import Pic from "../../Pic.vue";

	@Component({
		components: {Pic, CardHeader},
		props: {
			index: Number
		}
	})
	export default class AboutMe extends Vue {
		private state: StateManager = stateManager;
		private index?: number;

		data() {
			return {
				aboutme: images.aboutme,
			}
		}

		get IsTriggered(): boolean {
			return this.state.checkTriggered(this.index!)
		}

		async trigger() {
			const header: any = this.$refs.header;
			if (!this.IsTriggered) {
				this.state.markTriggered(this.index!);
				await header.trigger();
				const description: HTMLElement = this.$refs.desc as HTMLElement;
				await Promise.all([
					description.ScaleX(1.05, 1, {duration: 500, ease: eases.EaseOut(EaseStrength.Quadratic)}),
					description.ScaleY(1.05, 1, {duration: 500, ease: eases.EaseOut(EaseStrength.Quadratic)}),
					description.Opacity(0, 1, {duration: 500, ease: eases.EaseOut(EaseStrength.Quadratic)})
				])
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
			return "A Short Introduction";
		}
	}
</script>
