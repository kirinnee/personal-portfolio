<template>
    <div class="holder">

        <div class="title">
            <Pic class='logo' :src='Logo' type="h" uncenter></Pic>
            <div class="stack-holder">
                <template v-for="stack in Stack">
                    <div class="stack">
                        <Pic class='i' :src="stack[0]" type="b" uncenter></Pic>
                        <!--                        <Pic class='i' :src="stack[1]" type="b" uncenter></Pic>-->
                    </div>
                </template>
            </div>
        </div>
        <div class="description">
            {{Description}}
        </div>

        <div class="screenshots" @click="Reveal">View Screenshots</div>
    </div>
</template>

<style lang='scss' scoped>

    .mobile {
        .holder {
            margin: 10px;
            width: 90%;
            position: relative;
            left: 50%;
            transform: translateX(-50%);

        }

        .description {
            padding: 20px 0;
            font-size: 32px;

        }

        .screenshots {
            margin: 40px 0;
            padding: 20px 40px;
            width: 50%;
            left: 50%;
            font-size: 30px;
            border-radius: 10px;
        }

        .title {
            .logo {
                height: 100px;
            }

            padding: 20px 0;

            .stack-holder {
                .stack {
                    width: 60px;
                    height: 60px;
                    margin: 0 10px;
                }
            }
        }
    }

    .holder {
        margin: 10px;
        width: 700px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0;
    }

    .description {
        padding: 20px 0;
        color: white;
        font-family: Raleway, sans-serif;
        text-justify: auto;
        text-align: justify;

    }

    .screenshots {
        font-family: Raleway, sans-serif;
        text-align: center;
        cursor: pointer;
        color: gold;
        padding: 10px;
        border: 1px solid white;
        width: 200px;
        left: 50%;
        position: relative;
        transform: translateX(-50%);
        border-radius: 5px;
        transition: background 0.3s;

        &:hover {
            background: #00000022
        }
    }

    .title {
        .logo {
            height: 60px;
            position: relative;
        }

        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid white;
        padding: 20px 0;

        .stack-holder {
            display: flex;

            .stack {
                position: relative;
                width: 40px;
                height: 40px;
                margin: 0 5px;

                .i {
                    position: absolute;
                }
            }
        }
    }

</style>

<script lang='ts'>
	import {Component, Vue} from 'vue-property-decorator';
	import {ProjectData} from "../../../../../classLibrary/ProjectData";
	import Pic from "../../Pic.vue";
	import Project from "./Project.vue";
	
	@Component({
		components: {Pic},
		props: {
			projectData: ProjectData
		}
	})
	export default class ProjectInstance extends Vue {
		private projectData?: ProjectData;

		get Project(): ProjectData {
			return this.projectData!;
		}

		get Logo(): string {
			return this.Project.logo;
		}

		get Stack(): [string, string][] {
			return this.Project.stack;
		}

		get Description(): string {
			return this.Project.description;
		}

		get Parent(): Project {
			return this.$parent as Project;
		}

		Reveal() {
			this.Parent.ShowScreenshots(this.Project.screenshots);
		}
	}
</script>
