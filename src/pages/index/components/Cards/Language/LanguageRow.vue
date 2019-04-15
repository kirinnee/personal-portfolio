<template>

    <tr class="row">
        <td class="right" :style="Style">
            <div class="carry">
                <i @mouseover="isHovering=true"
                   @mouseout="isHovering=false"
                   :class="image"
                   :style="isHovering ?  Hover: ''"
                ></i>
            </div>
        </td>
        <td class="ticks" v-for="t in Ticked" :style="Style">
            <div class="tick-holder">
                <img :src="tick" alt="Oops..." :style="t">
            </div>
        </td>
    </tr>
</template>

<style lang='scss' scoped>
    $p: (100% / 6);
    td {
        width: $p;
    }

    .right {
        position: relative;
        border-top-left-radius: 40px;
        border-bottom-left-radius: 40px;;

        .carry {
            display: inline-block;
            position: relative;
            left: 50%;
            transform: translateX(-50%);
            height: 100%;

            i {
                display: flex;
                text-align: center;
                font-size: 250%;
                transition: color 0.3s;
                cursor: default;
            }
        }

    }

    .row {
        top: 50px;
    }

    .ticks {
        height: 60px;
        position: relative;

        .tick-holder {
            display: block;
            position: relative;
            width: 100%;
            height: 100%;

            img {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                height: 40px;
                width: 40px;
            }
        }

    }
</style>

<script lang='ts'>
	import {Component, Vue} from 'vue-property-decorator';
	import {images} from "../../../images";
	
	@Component({
		props: {
			color: String,
			ticks: Array,
			image: String,
			hoverColor: String,
		}
	})
	export default class LanguageRow extends Vue {
		private ticks?: boolean[];
		private color?: string;
		private image?: boolean;
		private hoverColor?: string;

		get Style() {
			return {

				background: this.color!
			};
		}

		get Hover() {
			return {color: this.hoverColor!};
		}

		data() {
			return {
				isHovering: false,
				tick: images.tick,
				Image: this.image,
			}
		}


		get Ticked() {
			return this.ticks!.Map(e => {
				return {opacity: e ? 1 : 0}
			})
		}
	}
</script>
