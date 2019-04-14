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
            <Card :index="2" color="#590909" name="languages" dot-color="white" :state="StateManager">
                <Languages :index="2"></Languages>
            </Card>
            <div class="buffer"></div>
            <Card :index="3" color="#b3efec" name="skill" dot-color="#263238" :state="StateManager">
                <Skill :index="3"></Skill>
            </Card>
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
	import Languages from "./components/Cards/Language/Languages.vue";
	import Skill from "./components/Cards/Skill/Skill.vue";

	@Component({
		components: {
			Skill,
			Languages,
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
