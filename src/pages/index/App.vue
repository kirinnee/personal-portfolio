<template>
    <div class="parent">
        <Background id="bkgd" :state="StateManager"></Background>
        <div class='holder'>
            <Card :index="0" color="#0c346d" name="introduction" dot-color="white" :state="StateManager">
                <Introduction></Introduction>
            </Card>
            <div class="buffer"></div>
            <Card :index="1" color="pink" name="about me" dot-color="#263238" :state="StateManager">
                <AboutMe :index="1"></AboutMe>
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
        height: 100vh;
    }
</style>

<script lang="ts">
	import {Component, Vue} from 'vue-property-decorator';
	import Background from "./components/Background.vue";
	import Card from "./components/Card.vue";
	import {stateManager} from "./init";
	import AboutMe from "./components/Cards/AboutMe/AboutMe.vue";
	import Introduction from "./components/Cards/Introduction/Introduction.vue";

	@Component({
		components: {
			Introduction,
			AboutMe,
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
