<template>
    <div class="parent">
        <Background id="bkgd" :state="StateManager"></Background>
        <div class='holder'>
            <Card :index="0" color="green" name="introduction" dot-color="black" :state="StateManager">
                <div class="text">First Div</div>
            </Card>
            <div class="buffer"></div>
            <Card :index="1" color="pink" name="about me" dot-color="white" :state="StateManager">
                <div class="text">Second Div</div>
            </Card>
            <div class="buffer"></div>
            <Card :index="2" color="orange" name="timeline" dot-color="black" :state="StateManager">
                <div class="text">Third Div</div>
            </Card>
            <div class="buffer"></div>
            <Card :index="3" color="blue" name="skill set" dot-color="white" :state="StateManager">
                <div class="text">Fourth Div</div>
            </Card>
            <div class="buffer"></div>
        </div>

    </div>

</template>

<style lang="scss" scoped>
    .text {
        height: 50vh;
    }

    .parent {
        width: 100vw;
        overflow-x: hidden;
    }

    .holder {
        position: absolute;
    }

    .buffer {
        height: 120vh;
    }
</style>

<script lang="ts">
	import {Component, Vue} from 'vue-property-decorator';
	import Background from "./components/Background.vue";
	import Card from "./components/Card.vue";
	import {stateManager} from "./init";

	@Component({
		components: {
			Background,
			Card
		}
	})
	export default class App extends Vue {
		get StateManager() {
			return stateManager;
		}
	}
</script>
