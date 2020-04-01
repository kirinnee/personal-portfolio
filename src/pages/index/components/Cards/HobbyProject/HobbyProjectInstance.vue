<template>
    <div class="hobby-instance">
        <a rel="noreferrer" :href="Hob.link" class="header" target="_blank">{{Hob.name}}

            <Pic :src="link" type="b" uncenter class="l"/>
        </a>
        <div class="detail">
            <Pic class="ss" type="w" :src="Hob.screenshot" uncenter/>
            <div class="right">
                <div class="desc" v-html="Hob.description">

                </div>
                <div class="stack">
                    <div class="stack-holder" v-for="(s, index) in Hob.stack" :key="index">
                        <Pic :src="s[0]" uncenter type="b"/>
                        <Pic :src="s[1]" uncenter type="b" class="over"/>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style lang='scss' scoped>

    .mobile {
        .hobby-instance {
            margin: 15px;
            width: 95%;
            padding: 15px 20px;

            .header {
                font-size: 30px;
                margin-bottom: 15px;

                .l {
                    width: 15px;
                    height: 15px;
                }
            }

            .desc {
                box-sizing: border-box;
                padding-right: 5px;
                font-size: 16px;
            }

            .detail {
                display: flex;
                flex-direction: column;
                position: relative;

                .ss {
                    width: 100%;
                    position: relative;
                    margin-bottom: 15px;
                }

                .right {
                    display: flex;
                    flex-direction: column-reverse;
                    width: 100%;
                    padding: 0;
                }

                .stack {
                    flex-direction: row;
                    justify-content: center;
                }

                .stack-holder {
                    margin: 10px;
                    width: 25px;
                    height: 25px;
                    box-sizing: border-box;
                }


            }

        }
    }

    .hobby-instance {
        opacity: 0;
        border-radius: 10px;
        font-family: Raleway, sans-serif;
        text-align: justify;
        margin: 30px;
        width: 800px;
        background: #FFFFFF77;
        padding: 30px;
        box-sizing: border-box;
        position: relative;

        .header {
            font-family: Raleway, sans-serif;
            font-size: 30px;
            text-align: center;
            width: 100%;
            display: block;
            text-decoration: none;
            color: darkcyan;
            cursor: pointer;

            .l {
                position: relative;
                width: 10px;
                height: 10px;
                display: inline-block;
            }
        }

        .detail {
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;

            .right {
                box-sizing: border-box;
                padding: 20px;
                width: 50%;
                position: relative;
            }

            .stack {
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
            }

            .stack-holder {
                margin: 20px;
                position: relative;
                width: 40px;
                height: 40px;

                div {
                    position: absolute;
                }

                .over {
                    opacity: 0;

                    &:hover {
                        opacity: 1;
                    }
                }

            }

            .ss {
                width: 50%;
                position: relative;
            }

        }

    }
</style>

<script lang='ts'>
    import {Component, Vue} from 'vue-property-decorator';
    import {HobbyData} from "../../../../../classLibrary/HobbyData";
    import Pic from "../../Pic.vue";
    import {images} from "../../../images";
    import {isMobile} from "../../../init";

    @Component({
        components: {Pic},
        props: {
            hobby: HobbyData
        }
    })
    export default class HobbyProjectInstance extends Vue {
        private hobby?: HobbyData;

        data() {
            return {
				link: images.link
			}
		}

		get Hob(): HobbyData {
			return this.hobby!;
		}

		get Uncenter(): string | null {
			return !isMobile() ? null : "";
		}
	}
</script>
