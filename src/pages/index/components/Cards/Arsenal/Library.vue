<template>
    <div class="holder" @mouseover="hover=true" @mouseleave="hover=false" :style="Border">
        <div class="header" :style="Style">{{Lib.name}}</div>
        <div class="desc"> {{Lib.description}}</div>
        <a class='source' :href="Lib.link">Source</a>
    </div>
</template>

<style lang='scss' scoped>

    .mobile {
        .holder {
            margin: 20px;
            width: 90%;
            padding: 20px;

            .source {
                padding: 10px 20px;
                border-radius: 25px;
                margin-top: 10px;
                font-size: 16px;
            }

            .desc {
                padding: 10px;
                font-size: 16px;
            }

            .header {
                margin-bottom: 5px;
                font-size: 30px;
            }
        }
    }

    .holder {
        opacity: 0;
        margin: 20px;
        border: 1px solid white;
        width: 350px;
        position: relative;
        padding: 20px 10px;
        color: white;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: color 0.5s, border-color 0.5s;

        .source {
            font-family: Raleway, sans-serif;
            padding: 10px 20px;
            border: 1px solid white;
            border-radius: 20px;
            margin-top: 10px;
            text-decoration: none;
            color: white;
            position: relative;

            text-align: center;
            transition: background-color 0.5s;

            &:hover {
                background: #00000088;
            }
        }

        .desc {
            padding: 10px;
            text-align: justify;
            font-size: 18px;
            font-family: Raleway, sans-serif;
        }

        .header {
            text-align: center;
            font-size: 30px;
            font-family: Raleway, sans-serif;
            transition: color 0.5s, border-color 0.5s;
        }
    }
</style>

<script lang='ts'>
    import {Component, Vue} from 'vue-property-decorator';
    import {LibraryData} from "../../../../../classLibrary/LibraryData";

    @Component({
        props: {lib: LibraryData}
    })
    export default class Library extends Vue {
        private lib?: LibraryData;
        private hover: boolean = false;

        get Lib(): LibraryData {
            return this.lib!;
        }

        get Style() {
            return {
                color: this.hover ? this.Lib.color : "white"
            };
        }

        get Border() {
            return {
                border: this.hover ? `1px solid ${this.Lib.color}` : "1px solid white"
			}
		}
	}
</script>
