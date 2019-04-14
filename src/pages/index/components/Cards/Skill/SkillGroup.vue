<template>
    <div class="holder">
        <SkillInstance class="skill" v-for="(s, index) in skills" :sd="s" :key="index"></SkillInstance>
    </div>
</template>

<style lang='scss' scoped>
    .skill {
        margin: 20px;
        box-sizing: border-box;
    }

    .holder {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: space-evenly;
        justify-content: space-evenly;
    }
</style>

<script lang='ts'>
	import {Component, Vue} from 'vue-property-decorator';
	import SkillInstance from './SkillInstance.vue';

	@Component({
		components: {
			SkillInstance
		},
		props: {
			skills: Array
		}
	})
	export default class SkillGroup extends Vue {
	}
</script>
