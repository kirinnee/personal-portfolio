<template>
    <div class="full">
        <div class="main">
            <CardHeader :dark="true" :index="Index" :title="Title" :subtitle="Subtitle" ref="header"/>
            <div class="description" ref="desc">
                <p>
                    Hello! I am <b>Ernest</b> from Singapore.
                    I am a software developer specialising in <b>backend and infrastructure architecture</b>.
                </p>
                <p>
                    I have been captivated with the process of crafting new things - I quickly picked up the basics of
                    software development. At the age of 12, I had my first production application, a Chinese game in
                    Singapore's BiCultural Exhibition representing my school!
                </p>
                <p>
                    Several years, projects and books later, this exploration has led to an interest in <b>backend
                                                                                                           development</b>,
                    coupled tightly with a passion for <b>object modelling</b>, <b>software and infrastructure
                                                                                   architecture</b>, and <b>testing
                                                                                                            strategies</b>.
                    I am also an avid book reader and a geek who spends the weekends developing tools or learning new
                    technology.
                </p>
                <p>
                    I am also <b>passionate about open source</b>. By making its discussions and code publicly
                    available, the
                    open-source community has significantly contributed to my growth. My
                    libraries and side projects are open sourced on GitLab.
                </p>
            </div>
        </div>
        <Pic class="background" :src="aboutme" type="w" uncenter/>
    </div>
</template>

<style scoped lang="scss">

    .mobile {
        .background {
            width: 100%;

        }

        .description {
            width: 120%;
            font-size: 18px;
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
