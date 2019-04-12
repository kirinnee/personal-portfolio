<template>
    <div class="full">
        <div class="main">
            <CardHeader :dark="true" :index="Index" :title="Title" :subtitle="Subtitle" ref="header"></CardHeader>
        </div>
    </div>
</template>

<style scoped lang="scss">

    .full {
        position: relative;
        width: 100vw;
        height: 100vh;
    }

    .main {
        width: 70%;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
    }
</style>

<script lang="ts">
	import {Component, Vue} from 'vue-property-decorator';
	import CardHeader from "../CardHeader.vue";
	import {stateManager} from "../../init";
	import {StateManager} from "../../../../classLibrary/StateManager";
	import {States} from "../../../../classLibrary/States";
	
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
				state: stateManager
			}
		}

		trigger() {
			const header: any = this.$refs.header;
			if (!this.state!.checkTriggered(this.index!)) {
				this.state!.markTriggered(this.index!);
				header.trigger();
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
			return "Learn about me";
		}
	}
</script>
