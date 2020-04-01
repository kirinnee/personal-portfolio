<template>
    <tr class="row">
        <td class="right" :style="Style">
            <div class="carry" @mouseover="isHovering=true" @mouseleave="isHovering=false">
                <img :src="Under" :style="UnderStyle" alt="Oops.. Image cannot be found :<">
                <img :src="Over" :style="OverStyle" alt="Oops.. Image cannot be found :<">
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
    .mobile {
        .row {
            height: 50px;
        }

        .right {
            border-top-left-radius: 80px;
            border-bottom-left-radius: 80px;
            .carry {
                img {
                    width: 30px;
                    height: 30px;
                }
            }
        }

        .ticks {
            .tick-holder {
                img {
                    height: 30px;
                    width: 30px;
                }
            }

        }


    }

    $p: (100% / 6);
    td {
        width: $p;
    }

    .center {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .row {
        opacity: 0;
        height: 60px;
    }

    .right {
        position: relative;
        border-top-left-radius: 40px;
        border-bottom-left-radius: 40px;

        .carry {
            position: relative;
            height: 100%;
            width: 100%;

            img {
                @extend .center;
                height: 40px;
                width: 40px;
                transition: opacity 0.3s;
            }

        }

    }


    .ticks {
        position: relative;

        .tick-holder {
            display: block;
            position: relative;
            width: 100%;
            height: 100%;

            img {
                @extend .center;
                height: 30px;
                width: 30px;
            }
        }

    }
</style>

<script lang='ts'>
    import {Component, Vue} from 'vue-property-decorator';
    import {images} from "../../../images";
    import {LangData} from "../../../../../classLibrary/LangData";

    @Component({
        props: {
            langData: LangData
        }
    })
    export default class LanguageRow extends Vue {
        private langData?: LangData;
        private isHovering: boolean = false;

        get Style() {
            return {
                background: this.langData!.color
            };
        }


        data() {
            return {
                tick: images.tick,
            }
        }

		get UnderStyle() {
			return {opacity: this.isHovering ? 1 : 1}
		}

		get OverStyle() {
			return {opacity: this.isHovering ? 1 : 0}
		}

		get Under(): string {
			return this.langData!.under;
		}

		get Over(): string {
			return this.langData!.over;
		}

		get Ticked() {
			return this.langData!.ticks.Map(e => {
				return {opacity: e ? 1 : 0}
			})
		}
	}
</script>
