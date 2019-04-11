<template>
    <div class="element">
        <div class="label" :style="LabelStyle">{{name}}</div>
        <div class="circle" :style="CircleStyle"></div>
    </div>
</template>

<style lang='scss' scoped>

    .element {
        display: flex;
        justify-content: center;
        margin: 4px 0;
    }

    .label {
        font-family: Raleway, sans-serif;
        text-transform: uppercase;
        letter-spacing: .025rem;
        font-size: .85rem;
        margin: 0 0.025rem 0.5rem -0.1rem;
        overflow: hidden;
        width: .85rem;
        height: auto;
        transition: max-height 1s;
        vertical-align: baseline;
        box-sizing: border-box;

    }

    .circle {
        height: 13px;
        width: 13px;
        box-sizing: border-box;
        /*vertical-align: baseline;*/
        border-radius: 50%;
    }
</style>
<script lang="ts">
	import {Component, Vue} from 'vue-property-decorator';
	import {StateManager} from "../../../classLibrary/StateManager";
	
	@Component({
		props: {
			state: StateManager,
			name: String,
			index: Number
		}
	})
	export default class NavElement extends Vue {
		private state?: StateManager;
		private index?: number;

		get Selected(): boolean {
			return this.state!.Current == this.index;
		}

		get LabelStyle(): any {
			return {
				maxHeight: this.Selected ? "150px" : "0",
				color: this.state!.CurrentState.circleColor
			}
		}

		get CircleStyle(): any {
			return {
				border: `solid 2px ${this.state!.CurrentState.circleColor}`,
				backgroundColor: this.Selected ? this.state!.CurrentState.circleColor : "transparent"
			}
		}

	}
</script>

