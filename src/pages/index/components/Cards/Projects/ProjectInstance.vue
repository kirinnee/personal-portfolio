<template>
    <div class="holder">
        <div class="left">
            <div class="screenshot">
                <img :src="Screenshot" :alt="Alt">
            </div>
            <div class="description">
                {{Description}}
            </div>
        </div>
        <div class="stack-holder">
            <template v-for="stack in Stack">
                <div class="stack">
                    <img :src="stack[0]" :alt="Alt">
                    <img :src="stack[1]" :alt="Alt">
                </div>
            </template>
        </div>
    </div>
</template>

<style lang='scss' scoped>
    .stack-holder {
        position: relative;
    }

    .stack {
        margin: 10px;
        position: relative;
        width: 50px;
        height: 50px;

        img {
            height: 100%;
            width: 100%;
            position: absolute;
        }
    }

    .left {
        position: relative;
        width: 400px;

        .screenshot {
            position: relative;
            width: 100%;

            img {
                position: relative;
                max-width: 100%;
                height: auto;
            }
        }

        .description {
            font-size: 20px;
            font-family: Raleway, sans-serif;
        }
    }

    .holder {
        position: relative;
        display: flex;
        justify-content: center;
    }
</style>

<script lang='ts'>
	import {Component, Vue} from 'vue-property-decorator';
	import {ProjectData} from "../../../../../classLibrary/ProjectData";
	
	@Component({
		props: {
			projectData: ProjectData
		}
	})
	export default class ProjectInstance extends Vue {
		private projectData?: ProjectData;

		get Link(): string {
			return this.projectData!.relativePath;
		}

		get Screenshot(): string {
			return this.projectData!.screenshot;
		}

		get Stack(): [string, string][] {
			return this.projectData!.stack;
		}

		get Description(): string {
			return this.projectData!.description;
		}

		get Alt(): string {
			return "Oops, image cannot be found.. :<"
		}
	}
</script>
