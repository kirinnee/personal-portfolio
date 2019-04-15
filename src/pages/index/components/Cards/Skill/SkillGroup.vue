<template>
    <div class="holder">
        <SkillInstance class="skill" v-for="(s, index) in skills" :sd="s" :key="index" ref="skilltable"></SkillInstance>
    </div>
</template>

<style lang='scss' scoped>
    .skill {
        opacity: 0;
        margin: 20px;
        box-sizing: border-box;
    }

    .holder {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
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
		async trigger() {
			console.log("trigged");
			const skillTable: any[] = this.$refs.skilltable as Vue[];
			await skillTable.Each((e) => e.$el.Opacity(0, 0, {duration: 0}).Promise);
			skillTable.Each(async (e, i) => {
				const ele = e.$el;
				console.log(ele);
				await Promise.all([
					ele.Wait({duration: i * 100}).Opacity(0, 1, {duration: 400}).Promise,
					ele.Wait({duration: i * 100}).X(-10, 0, {duration: 200}).Promise,

				]);
				e.trigger()

			});
		}
	}
</script>
