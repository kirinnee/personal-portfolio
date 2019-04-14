<template>
    <div class="full">
        <div class="background">
            <img :src="languages" alt="Oops, image not found...">
        </div>
        <div class="main">
            <CardHeader :dark="true" :index="Index" :title="Title" :subtitle="Subtitle" ref="header"></CardHeader>


        </div>
    </div>
</template>

<style lang='scss' scoped>
    .full {
        position: relative;
        height: 100vh;
    }

    .background {
        opacity: 0.1;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        left: 50%;
        width: 40%;

        img {
            width: 100%;
        }
    }
</style>

<script lang='ts'>
	import {Component, Vue} from 'vue-property-decorator';
	import CardHeader from "../../CardHeader.vue";
	import {StateManager} from "../../../../../classLibrary/StateManager";
	import {images} from "../../../images";
	import {stateManager} from "../../../init";
	import {States} from "../../../../../classLibrary/States";
	
	@Component({
		components: {CardHeader},
		props: {index: Number}
	})
	export default class Skill extends Vue {
		private state?: StateManager;
		private index?: number;

		data() {
			return {
				state: stateManager,
				languages: images.skill,
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
