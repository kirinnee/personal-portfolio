<template>
    <div class="card" v-waypoint="{ active: true, callback: onReach }">
        <slot ref="child"></slot>
    </div>
</template>

<style lang='scss' scoped>
    .card {
        width: 100vw;
        overflow-x: hidden;
        padding: 0;
        margin: 0;
        border: 0;
    }
</style>

<script lang="ts">
	import {Component, Vue} from 'vue-property-decorator';
	import {StateManager} from "../../../classLibrary/StateManager";
	
	@Component({
		props: {
			color: String,
			index: Number,
			name: String,
			state: StateManager
		}
	})
	export default class Card extends Vue {
		private color?: string;
		private index?: number;
		private state?: StateManager;
		private name?: string;

		onReach({going}: { going: string, direction: string }): void {
			if (going == "in") console.log("Entering: ", this.index!);
			if (this.state!.Current != this.index && going == "in") {
				// let child: any = this.$refs.child;
				this.state!.trigger(this.index!);
				// child.triggerReach();
			}
		}

		beforeMount() {
			this.state!.register({
				index: this.index!,
				name: this.name!,
				color: this.color!
			});
		}
	}
</script>

