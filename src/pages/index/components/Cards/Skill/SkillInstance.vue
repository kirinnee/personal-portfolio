<template>

    <div class="instance" @mouseover="hover=true" @mouseleave="hover=false">
        <div class="center-align">
            <div class="holder">
                <Pic :src="Plain" :style="HoverPlain" type="b" uncenter class="i"></Pic>
                <Pic :src="Original" :style="HoverOriginal" type="b" uncenter class='hover i'></Pic>
            </div>
            <div class="progress-bar" :style="Progress"></div>
            <div class="name" :style="HoverName">{{Name}}</div>
        </div>

    </div>

</template>

<style lang='scss' scoped>

    .mobile {
        .instance {
            width: 28vw;
            height: 28vw;

            .name {
                font-size: 30px;
            }
        }

        .holder {
            width: 12vw;
            height: 12vw;
        }
    }

    .middle {
        left: 50%;
        transform: translateX(-50%);
    }

    .center-align {
        top: 50%;
        transform: translateY(-50%);
        position: absolute;
        display: inline-block;

    }

    .progress-bar {
        @extend .middle;
        position: relative;
        height: 1px;
        width: 0;
        transition: width 0.5s ease-out;
        background: black;
        margin-bottom: 25px;
    }

    .instance {
        position: relative;
        display: flex;
        align-content: center;
        align-items: center;
        flex-direction: column;
        width: 10vw;
        height: 10vw;
        margin: 1vw;
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
            width: 100%;
            transition: top 0.3s;
        }
    }

    .holder {
        @extend .middle;
        position: relative;
        width: 4vw;
        height: 4vw;
        margin-top: 10px;
        margin-bottom: 15px;

        .i {
            position: absolute;
        }

        .hover {
            opacity: 0;
        }

    }
</style>

<script lang='ts'>
	import {Component, Vue} from 'vue-property-decorator';
	import {SkillData} from "../../../../../classLibrary/SkillData";
	import Pic from "../../Pic.vue";
	
	@Component({
		components: {Pic},
		props: {
			sd: SkillData
		}
	})
	export default class SkillInstance extends Vue {
		private sd?: SkillData;
		private hover: boolean = false;
		private progress: any = {};

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
				top: this.hover ? "-15px" : 0,
				color: this.hover ? "black" : "black"
			}
		}

		get HoverPlain() {
			return {opacity: this.hover ? 0 : 1}
		}


		get HoverOriginal() {
			return {opacity: this.hover ? 1 : 0}
		}

		get Progress() {
			return this.progress;
		}
	}
</script>
