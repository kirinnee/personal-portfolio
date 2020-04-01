<template>
    <div class="nt" :class="Selected(type)" @click="Select(type)">
        {{name}}
    </div>
</template>

<style lang='scss' scoped>

    .mobile {
        .nt {
            font-size: 16px;
            margin: 8px 2px;
            padding: 5px;
        }
    }

    .nt {
        font-family: Raleway, sans-serif;
        padding: 5px 20px;
        cursor: pointer;
        text-align: center;

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
            let old = "";
            for (const v in parent.selected) {
                if (parent.selected.hasOwnProperty(v)) {
					if (parent.selected[v]) {
						old = v;
					}
				}
			}
			if (old === s) return;
			for (const v in parent.selected) {
				if (parent.selected.hasOwnProperty(v)) {
					parent.selected[v] = false;
				}
			}
			parent.selected![s] = true;
			parent.playAnimation(s);
		}

		Selected(s: string): string[] {
			return [this.Parent.selected![s] ? "selected" : "", this.dark! ? "black" : "white"];
		}
	}
</script>
