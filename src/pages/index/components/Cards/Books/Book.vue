<template>
    <div class="full">
        <BookBackground/>
        <div class="main">
            <CardHeader :dark="false" :index="Index" :title="Title" :subtitle="Subtitle" ref="header"/>
            <div class="description" ref="desc">
                As an avid reader, I have read many programming and development books mainly about below four topics.
                Below is the list of books I have read. I highly recommend it to people who are as interested in the
                development world as I am!
            </div>
            <div class="nav-bar" ref="nav">
                <NavTab name="Go" type="go"/>
                <NavTab name="C#" type="csharp"/>
                <NavTab name="Ruby" type="ruby"/>
                <NavTab name="Software Design" type="design"/>
                <NavTab name="Others" type="others"/>
            </div>
            <div class="books">
                <Pic :src="s" v-for="(s, index) in Books" :key="index" class="rel" ref="books" type="h" uncenter/>
            </div>
        </div>
    </div>
</template>

<style lang='scss' scoped>

    .rel {
        position: relative;
        opacity: 0;
        height: 10vw;
        margin: 1vw;
    }

    .mobile {
        .description {
            width: 85%;
            font-family: Raleway, sans-serif;
            font-size: 16px;

        }

        .books {
            margin-top: 20px;
            display: flex;
            flex-wrap: wrap;
            width: 100%;

            .rel {
                height: 120px;
                margin: 10px;
            }

            .nav-bar {
                margin-top: 30px;
            }
        }

    }

    .nav-bar {
        @extend .middle;
        opacity: 0;
        color: white;
        margin-top: 50px;
        display: flex;
        font-size: 20px;
        justify-content: center;
    }

    .middle {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
    }

    .description {
        @extend .middle;
        opacity: 0;
        margin: 30px 0;
        width: 40%;
        font-family: Raleway, sans-serif;
        font-size: 18px;
        color: white;
        text-align: center;

    }

    .books {
        @extend .middle;
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        width: 50%;
        align-items: center;
        align-content: center;
        justify-content: center;

    }

    .full {
        position: relative;
        overflow: hidden;
        min-height: 100vh;
    }

</style>

<script lang='ts'>
    import {Component, Vue} from 'vue-property-decorator';
    import BookBackground from "./BookBackground.vue";
    import CardHeader from "../../CardHeader.vue";
    import {States} from "../../../../../classLibrary/States";
    import {StateManager} from "../../../../../classLibrary/StateManager";
    import {$$, stateManager} from "../../../init";
    import {images} from "../../../images";
    import NavTab from "../../NavTab.vue";
    import Pic from "../../Pic.vue";

    @Component({
        components: {Pic, NavTab, BookBackground, CardHeader},
        props: {index: Number}
    })
    export default class Book extends Vue {
        private index?: number;
        private state: StateManager = stateManager;
        private selected: { [s: string]: boolean } = {
            go: true,
            ruby: false,
            design: false,
            csharp: false,
            others: false
        };
        private books: string[] = [];

        get Books(): string[] {
            return this.books;
        }

		get Selected(): string {
			for (const x: string in this.selected) {
				if (this.selected[x]) {
					return x;
				}
			}
			return "";
		}

		get IsTriggered(): boolean {
			return this.state.checkTriggered(this.index!)
		}

		async trigger() {
			const header: any = this.$refs.header;
			if (!this.IsTriggered) {
				this.state.markTriggered(this.index!);
				await header.trigger();
				const desc: HTMLElement = this.$refs.desc as HTMLElement;
				await Promise.all([
					desc.Wait({duration: 200}).Opacity(0, 1, {duration: 400}).Promise,
					desc.Wait({duration: 200}).Y(20, 0, {duration: 200}).Promise,
				]);
				await (this.$refs.nav as HTMLElement).Wait({duration: 200}).Opacity(0, 1, {duration: 500}).Promise;
				this.playAnimation(this.Selected);
			}
		}

		get State(): States {
			return this.state.data[this.index!];
		}

		get Title(): string {
			return this.State.name;
		}

		get Index(): string {
			const s = this.State.index.toString();
			return this.State.index < 10 ? "0" + s : s;
		}

		get Subtitle(): string {
			return "Source of Knowledge";
		}

		async playAnimation(s: string): Promise<void> {
			this.books = images.books[s];
			await $$(0);
			(this.$refs.books as Vue[]).Each((e, i) => {
				e.$el.Wait({duration: i * 100}).Opacity(0, 1, {duration: 500});
				e.$el.Wait({duration: i * 100}).Y(20, 0, {duration: 300});
			})
		}
	}
</script>
