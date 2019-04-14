<template>
    <div :class="Selected(type)" @click="Select(type)">
        {{name}}
    </div>
</template>

<style lang='scss' scoped>
    div {
        font-family: Raleway, sans-serif;
        padding: 5px 20px;
        cursor: pointer;

        &.selected {
            border-bottom: 1px solid black;
        }

        &:hover {
            border-bottom: 1px solid black;
        }
    }
</style>

<script lang='ts'>
	import {Component, Vue} from 'vue-property-decorator';
	
	@Component({
		props: {
			name: String,
			type: String
		}
	})
	export default class NavTab extends Vue {
		get Parent(): any {
			return this.$parent;
		}

		Select(s: string) {
			const parent = this.Parent;
			for (const v in parent.selected) {
				parent.selected[v] = false;
			}
			parent.selected![s] = true;
			parent.playAnimation(s);
		}

		Selected(s: string): string {
			return this.Parent.selected![s] ? "selected" : "";
		}
	}
</script>
