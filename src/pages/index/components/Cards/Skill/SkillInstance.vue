<template>
    <div class="instance">
        <div class="holder" @mouseover="hover=true" @mouseleave="hover=false">
            <img :src="Plain" :style="HoverPlain" alt="Oops... Image cannot be found :<">
            <img class='hover' :style="HoverOriginal" :src="Original" alt="Oops... Image cannot be found :<">
        </div>
        <div class="name">{{Name}}</div>
    </div>

</template>

<style lang='scss' scoped>
    .holder {
        position: relative;
        width: 10vw;
        height: 10vw;

        img {
            position: absolute;
            width: 100%;
            height: 100%;
            transition: opacity 0.3s linear;

            &.hover {
                opacity: 0;
            }
        }
    }
</style>

<script lang='ts'>
	import {Component, Vue} from 'vue-property-decorator';
	import {SkillData} from "../../../../../classLibrary/SkillData";
	
	@Component({
		props: {
			sd: SkillData
		}
	})
	export default class SkillInstance extends Vue {
		private sd?: SkillData;
		private hover?: boolean;

		data() {
			return {
				hover: false,
			}
		}

		get Plain(): string {
			return this.sd!.plain;
		}

		get Original(): string {
			return this.sd!.ori;
		}

		get Name(): string {
			return this.sd!.name;
		}

		get Level(): number {
			return this.sd!.level;
		}

		get HoverPlain() {
			return {opacity: this.hover! ? 0 : 1}
		}


		get HoverOriginal() {
			return {opacity: this.hover! ? 1 : 0}
		}
	}
</script>
