<template>
    <div class="background">
        <div class="color"></div>
    </div>
</template>

<style lang='scss' scoped>
    .background {
        width: 100vw;
        height: 100vh;
        position: fixed;
    }

    .color {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 1;
    }
</style>

<script lang="ts">
	import {Component, Vue} from 'vue-property-decorator';
	import {StateManager} from "../../../classLibrary/StateManager";
	import NavBar from "./NavBar.vue";
	
	@Component({
		components: {NavBar},
		props: {
			state: StateManager
		}
	})
	export default class Background extends Vue {
	}
</script>


