<template>
    <div class="nav-bar">
        <NavElement v-for="value in Pages" :name="value.name" :index="value.index" :state="state">
            {{value.index}}
        </NavElement>
    </div>
</template>

<style lang='scss' scoped>
    .nav-bar {
        writing-mode: vertical-lr;
    }

</style>

<script lang="ts">
	import {Component, Vue} from 'vue-property-decorator';
	import NavElement from "./NavElement.vue";
	import {StateManager} from "../../../classLibrary/StateManager";
	import {stateManager} from "../init";
	
	@Component({
		components: {NavElement}
	})
	export default class NavBar extends Vue {
		private state?: StateManager;

		data() {
			return {state: stateManager}
		}

		get Pages() {
			return this.state!.data;
		}
	}
</script>


