import {EaseStrength} from "@kirinnee/kease";
<template>
    <div class="full">
        <div class="main">
            <CardHeader :dark="true" :index="Index" :title="Title" :subtitle="Subtitle" ref="header"></CardHeader>
            <div class="description" ref="desc">
                <p>
                    Lorem ipsum dolor sit <b>amet</b>, consectetur adipiscing elit. Nam ultricies neque sed justo
                    consequat, tristique laoreet mi aliquet. Sed nec posuere dolor, id sagittis turpis.
                    Aliquam <b>odio magna</b>, tincidunt in
                    commodo vitae, tincidunt in mi. </p>
                <p>
                    Nam ac nisl metus. <b>Sed id urna efficitur</b> dolor maximus iaculis non et risus. Donec ornare
                    libero eu
                    sem tempus, vitae <b>condimentum sem cursus.</b> Nullam ornare faucibus sodales. Pellentesque
                    feugiat ipsum
                    vitae metus elementum, nec porttitor sem consectetur. Fusce convallis consectetur metus
                    scelerisque posuere. Cras ut ex ac <b>tortor</b> convallis congue vel eu lectus. Integer condimentum
                    urna a
                    ornare convallis. Donec ut pretium est.
                </p>
            </div>
        </div>
        <div class="background">
            <img :src="aboutme" alt="Oops, image not found...">
        </div>
    </div>
</template>

<style scoped lang="scss">
    .background {
        position: relative;
        opacity: 0.1;
        width: 50%;
        overflow: hidden;

        img {
            width: 100%;
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
        position: relative;
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
	import CardHeader from "../CardHeader.vue";
	import {eases, stateManager} from "../../init";
	import {StateManager} from "../../../../classLibrary/StateManager";
	import {States} from "../../../../classLibrary/States";
	import {EaseStrength} from "@kirinnee/kease";
	import {images} from '../../images';

	@Component({
		components: {CardHeader},
		props: {
			index: Number
		}
	})
	export default class AboutMe extends Vue {
		private state?: StateManager;
		private index?: number;

		data() {
			return {
				state: stateManager,
				aboutme: images.aboutme,
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
				const description: HTMLElement = this.$refs.desc as HTMLElement;
				await Promise.all([
					description.ScaleX(1.1, 1, {duration: 500, ease: eases.EaseOut(EaseStrength.Quadratic)}),
					description.ScaleY(1.1, 1, {duration: 500, ease: eases.EaseOut(EaseStrength.Quadratic)}),
					description.Opacity(0, 1, {duration: 500, ease: eases.EaseOut(EaseStrength.Quadratic)})
				])
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
	}
</script>
