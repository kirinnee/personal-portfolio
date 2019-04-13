<template>
    <div class="card">
        <slot></slot>
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
			dotColor: String,
			state: StateManager
		}
	})
	export default class Card extends Vue {
		private color?: string;
		private dotColor?: string;
		private index?: number;
		private state?: StateManager;
		private name?: string;

		beforeMount() {
			this.state!.register({
				index: this.index!,
				name: this.name!,
				color: this.color!,
				circleColor: this.dotColor!
			});
		}

		mounted() {
			const element = this.$el as HTMLElement;
			new (Waypoint as any).Inview({
				element,
				enter: this.onReach
			});
		}

		onReach(): void {
			if (this.state!.Current != this.index) {
				this.state!.trigger(this.index!);
				const child: any = this.getSlot();
				if (child != null && child.trigger != null) {
					child.trigger();
				}
			}
		}

		getSlot(): any | null {
			try {
				return this.$slots.default![0]!.componentInstance;
			} catch {
				return null;
			}
		}


	}
</script>

