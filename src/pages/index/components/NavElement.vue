<template>
    <div class="element">
        <div class="label" :style="LabelStyle">{{name}}</div>
        <div class="circle" :style="CircleStyle"></div>
    </div>
</template>

<style lang='scss' scoped>
    div {
        position: relative;
        float: left;
    }

    .label {
        font-family: Raleway, sans-serif;
        text-transform: uppercase;
        letter-spacing: .025rem;
        font-size: 16px;
        margin: 4px 0 4px 0;
        overflow: hidden;
        height: auto;
        transition: max-height 0.4s;
    }

    .circle {
        width: 14px;
        height: 14px;
        vertical-align: baseline;
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
				maxHeight: this.Selected ? "50px" : "0"
			}
		}

		get CircleStyle(): any {
			return {
				border: "solid 1px black",
				backgroundColor: this.Selected ? "black" : "transparent"
			}
		}

	}
</script>

