<template>
    <div class="full">
        <ContactBackground></ContactBackground>
        <div class="main">
            <CardHeader :dark="false" :index="Index" :title="Title" :subtitle="Subtitle" ref="header"></CardHeader>
        </div>
    </div>
</template>

<style lang='scss' scoped>
    .full {
        position: relative;
        overflow: hidden;
        min-height: 120vh;
    }

</style>

<script lang='ts'>
	import {Component, Vue} from 'vue-property-decorator';
	import ContactBackground from "./ContactBackground.vue";
	import CardHeader from "../../CardHeader.vue";
	import {States} from "../../../../../classLibrary/States";
	import {StateManager} from "../../../../../classLibrary/StateManager";
	import {stateManager} from "../../../init";
	
	@Component({
		components: {ContactBackground, CardHeader},
		props: {index: Number}
	})
	export default class Contact extends Vue {
		private state?: StateManager;
		private index?: number;

		data() {
			return {
				state: stateManager,
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
