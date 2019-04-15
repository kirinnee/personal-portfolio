<template>
    <div class="instance" @mouseover="hover=true" @mouseleave="hover=false">
        <div class="holder">
            <img :src="Plain" :style="HoverPlain" alt="Oops... Image cannot be found :<">
            <img class='hover' :style="HoverOriginal" :src="Original" alt="Oops... Image cannot be found :<">
        </div>
        <div class="progress-bar" :style="Progress"></div>
        <div class="name" :style="HoverName">{{Name}}</div>
    </div>

</template>

<style lang='scss' scoped>

    .progress-bar {
        height: 1px;
        width: 0;
        transition: width 0.5s ease-out;
        background: black;
        margin-bottom: 15px;
    }

    .instance {
        position: relative;
        display: flex;
        align-content: center;
        align-items: center;
        flex-direction: column;
        width: 9vw;
        height: 9vw;
        box-sizing: border-box;
        border-radius: 10px;

        &:hover {
            background: #FDFDFD66;
        }

        .name {
            position: relative;
            margin: 10px 0;
            font-family: Raleway, sans-serif;
            text-align: center;
            width: 4vw;
            transition: top 0.3s;
        }
    }

    .holder {
        position: relative;
        width: 4vw;
        height: 4vw;
        margin-top: 10px;
        margin-bottom: 15px;

        img {
            position: absolute;
            width: 100%;
            height: 100%;

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
		private progress?: any;

		data() {
			return {
				hover: false,
				progress: {}
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

		trigger() {
			this.progress = {
				width: (this.Level * 7) + "vw"
			}
		}

		get HoverName() {
			return {
				top: this.hover! ? "-15px" : 0,
				color: this.hover! ? "black" : "black"
			}
		}

		get HoverPlain() {
			return {opacity: this.hover! ? 0 : 1}
		}


		get HoverOriginal() {
			return {opacity: this.hover! ? 1 : 0}
		}

		get Progress() {
			return this.progress;
		}
	}
</script>
