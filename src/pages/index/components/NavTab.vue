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

        &.selected.black {
            border-bottom: 1px solid black;
        }

        &.selected.white {
            border-bottom: 1px solid white;
        }

        &:hover.black {
            border-bottom: 1px solid black;
        }

        &:hover.white {
            border-bottom: 1px solid white;
        }
    }
</style>

<script lang='ts'>
	import {Component, Vue} from 'vue-property-decorator';
	
	@Component({
		props: {
			name: String,
			type: String,
			dark: Boolean,
		}
	})
	export default class NavTab extends Vue {
		private dark?: boolean;

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

		Selected(s: string): string[] {
			return [this.Parent.selected![s] ? "selected" : "", this.dark! ? "black" : "white"];
		}
	}
</script>
