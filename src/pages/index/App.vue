<template>
    <div class="parent">
        <Background id="bkgd" :state="StateManager"></Background>
        <div class='holder'>
            <Card :index="0" color="#4970a9" name="introduction" dot-color="white" :state="StateManager">
                <Introduction></Introduction>
            </Card>
            <div class="buffer"></div>
            <Card :index="1" color="#f2ffe4" name="about me" dot-color="#263238" :state="StateManager">
                <AboutMe :index="1"></AboutMe>
            </Card>
            <div class="buffer"></div>
            <Card :index="2" color="#6f3d3d" name="languages" dot-color="white" :state="StateManager">
                <Languages :index="2"></Languages>
            </Card>
            <div class="buffer"></div>
            <Card :index="3" color="#ffe0e0" name="skill" dot-color="#263238" :state="StateManager">
                <Skill :index="3"></Skill>
            </Card>
            <div class="buffer"></div>
            <Card :index="4" color="#003d5b" name="timeline" dot-color="white" :state="StateManager">
                <Timeline :index="4"></Timeline>
            </Card>
            <div class="buffer"></div>
            <Card :index="5" color="#ebebeb" name="portfolio" dot-color="#263238" :state="StateManager">
                <Project :index="5"></Project>
            </Card>
            <div class="buffer"></div>
            <Card :index="6" color="#007a6b" name="library" dot-color="white" :state="StateManager">
                <Book :index="6"></Book>
            </Card>
            <div class="buffer"></div>
            <Card :index="7" color="#2b454e" name="contact" dot-color="white" :state="StateManager">
                <Contact :index="7"></Contact>
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
	import Timeline from "./components/Cards/Timeline/Timeline.vue";
	import Project from "./components/Cards/Projects/Project.vue";
	import Contact from "./components/Cards/Contact/Contact.vue";
	import Book from "./components/Cards/Books/Book.vue";

	@Component({
		components: {
			Book,
			Contact,
			Project,
			Timeline,
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
