<template>
    <div class="background">

    </div>
</template>

<style lang='scss' scoped>
    .background {
        width: 100vw;
        height: 100vh;
        position: fixed;
        background-color: #AA44CC;
        opacity: 0.5;
    }
</style>

<script lang="ts">
	import {Component, Vue} from 'vue-property-decorator';
	
	@Component({})
	export default class Background extends Vue {

	}
</script>


