<template>
    <div class="modal" @click="MobileClose">
        <div class="close" @click="Close">X</div>
        <vueCustomScrollbar class="scroll-area" :settings="Settings">
            <Pic v-for="(s,index) in pictures" :key="index" :src="s" type="h" class="pic" uncenter/>
            <div ref="tip" class="tutorial">
                <div>
                    {{Tip}}
                </div>
                <div class="down" v-if="!Mobile">
                    v
                </div>
                <div class="right" v-if="Mobile">
                    >
                </div>
            </div>
        </vueCustomScrollbar>
    </div>
</template>

<style lang='scss' scoped>

    .mobile {
        .tutorial {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 40px;
            padding: 15px 30px;
            display: flex;
            align-items: center;
            bottom: auto;
        }

        .close {
            padding: 30px 60px;
            font-size: 40px;
            font-family: monospace;
        }

        .modal {
            box-sizing: border-box;
            position: fixed;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            padding: 40px;
            border-radius: 5px;
            background: #00000066;
            overflow: hidden;

            .scroll-area {
                box-sizing: border-box;
                position: relative;
                margin: auto;
                width: 90vw;
                height: 90vh;
                display: flex;
                align-items: center;

                .pic {

                    position: relative;
                    margin: 0 15px;
                }
            }
        }
    }

    .tutorial {
        position: fixed;
        bottom: 80px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 20px;
        font-family: Raleway, sans-serif;
        padding: 15px 30px;
        background: #ff9797;
        border: 1px solid #ff0000;
        color: #540000;
        text-align: center;
    }

    .down {
        font-family: monospace;
    }

    .close {
        user-select: none;
        position: absolute;
        right: 0;
        background: #DC143C;
        color: white;
        top: 0;
        padding: 5px 10px;
        font-family: monospace;
        cursor: pointer;

        &:hover {
            background: #DC143C * 1.5;
        }
    }

    .modal {
        box-sizing: border-box;
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        padding: 40px;
        border-radius: 5px;
        background: #00000066;
        overflow: hidden;

        .scroll-area {
            box-sizing: border-box;
            position: relative;
            margin: auto;
            width: 90vw;
            height: 90vh;
            display: flex;
            align-items: center;

            .pic {

                position: relative;
                margin: 0 15px;
            }
        }
    }
</style>

<script lang='ts'>
    import {Component, Vue} from 'vue-property-decorator';
    import Pic from "../../Pic.vue";
    import vueCustomScrollbar from 'vue-custom-scrollbar';
    import Project from "./Project.vue";
    import {images} from "../../../images";
    import {$$, isMobile} from "../../../init";

    @Component({
        props: {
            pictures: Array
        },
        components: {Pic, vueCustomScrollbar}
    })
    export default class PictureModal extends Vue {
        get Settings() {
            return {
				suppressScrollX: false,
				suppressScrollY: true
			}
		}

		get Down(): string {
			return images.downarrow
		}

		get Parent(): Project {
			return this.$parent as Project;
		}

		Close(): void {
			this.Parent.Close();
		}

		MobileClose(): void {
			if (this.Mobile) {
				this.Parent.Close();
			}
		}

		get Mobile(): boolean {
			return isMobile();
		}


		get Tip(): string {
			return this.Mobile ? "Swipe right for more screen shots!" : "Use the scrollbar below to scroll --> for more screenshots!"
		}

		async mounted() {
			await $$(this.Mobile ? 500 : 2000);
			await (this.$refs.tip as Element).Opacity(1, 0, {duration: this.Mobile ? 500 : 1000});
		}

	}
</script>
