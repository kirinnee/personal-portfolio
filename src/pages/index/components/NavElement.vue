<template>
    <div @click="Go" class="element" @mouseenter="hover=true" @mouseleave="hover=false">
        <div class="label" :style="LabelStyle">{{name}}</div>
        <div class="circle" :style="CircleStyle"></div>
    </div>
</template>

<style lang='scss' scoped>

    .mobile {
        .label {
            font-size: .70rem;

        }

        .circle {
            height: 11px;
            width: 11px;
            box-sizing: border-box;
            margin: 0 0.025rem 0.5rem -0.1rem;
            /*vertical-align: baseline;*/
            border-radius: 50%;
        }

        .element {
            margin: 1px 0;
        }
    }

    .element {
        cursor: pointer;
        display: flex;
        justify-content: center;
        margin: 4px 0;
        z-index: 10;
    }

    .label {
        font-family: Raleway, sans-serif;
        text-transform: uppercase;
        letter-spacing: .025rem;
        font-size: .85rem;
        margin: 0 0.025rem 0.5rem -0.1rem;
        overflow: hidden;
        width: 0.9rem;
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
    import {TweenLite} from "../init";

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
        private hover?: boolean;

        data() {
            return {
                hover: false
            }
        }

        Go() {
            TweenLite.to(window, 1, {scrollTo: `#card-${this.index!}`});
        }

        get Selected(): boolean {
            return this.state!.Current == this.index || this.hover!;
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
                opacity: this.Selected ? 1 : 0.4,
                backgroundColor: this.Selected ? this.state!.CurrentState.circleColor : "transparent"
            }
        }

    }
</script>

 
