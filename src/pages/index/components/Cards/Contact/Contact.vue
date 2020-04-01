<template>
    <div class="full">
        <ContactBackground/>
        <div class="main">
            <CardHeader :dark="false" :index="Index" :title="Title" :subtitle="Subtitle" ref="header"/>
            <div class="subtitle" ref="sub1">
                Interested in me or my tools? If you are looking for a backend engineer or want to know me more, please
                contact me, and I will be happy to talk with you.
            </div>
            <div class="social">
                <SocialMedia class="sm" v-for="(s,index) in Social" :social="s" :key="index" ref="sm"/>
            </div>
            <div ref="resume1" class="subtitle">You can grab a copy of my Résumé too!</div>
            <a ref="resume2" class='resume-dl' href="https://s3-ap-southeast-1.amazonaws.com/kirin.resume/resume.pdf"
               target="_blank">Résumé</a>
            <div v-if="!isPWA()" ref="install1" class="subtitle" style="margin-top: 60px;">or add my portfolio to your
                Home Screen!
            </div>
            <a v-if="!isPWA()" ref="install2" class='resume-dl' @click="Install">Install</a>
        </div>
    </div>
</template>

<style lang='scss' scoped>

    .mobile {
        .resume-dl {
            margin-top: 60px;
            padding: 20px 80px;
            font-size: 40px;
            border-radius: 40px;
        }

        .social {
            margin: 100px 0;

            .sm {
                margin: 50px;
                width: 120px;
                height: 120px;
            }
        }

        .subtitle {
            width: 90%;
            margin-top: 120px;
            font-size: 2.4rem;
        }
    }

    .resume-dl {
        opacity: 0;
        display: inline-block;
        margin-top: 30px;
        @extend .middle;
        text-decoration: none;
        padding: 5px 20px;
        border-radius: 15px;
        background: white;
        font-family: Raleway, sans-serif;
        text-align: center;
        color: black;
        transition: background 0.3s, color 0.3s;
        cursor: pointer;

        &:hover {
            color: white;
            background: #db8f4c;
        }
    }

    .middle {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
    }

    $w: 90px;
    .social {
        @extend .middle;
        margin: 50px 0;
        display: flex;
        align-content: center;
        align-items: center;
        justify-content: center;

        .sm {
            opacity: 0;
            margin: 1vw;
            width: $w;
            height: $w;
        }
    }

    .full {
        position: relative;
        overflow: hidden;
        min-height: 100vh;
    }

    .main {
        position: relative;
    }

    .subtitle {
        @extend .middle;
        opacity: 0;
        width: 600px;
        text-align: center;
        color: white;
        margin-top: 60px;
        font-family: Raleway, sans-serif;
        font-size: 1.1rem;
        font-weight: 400;
    }

</style>

<script lang='ts'>
    import {Component, Vue} from 'vue-property-decorator';
    import ContactBackground from "./ContactBackground.vue";
    import CardHeader from "../../CardHeader.vue";
    import {States} from "../../../../../classLibrary/States";
    import {StateManager} from "../../../../../classLibrary/StateManager";
    import {isPWA, stateManager} from "../../../init";
    import SocialMedia from "./SocialMedia.vue";
    import {SocialData} from "../../../../../classLibrary/SocialData";
    import {socialMap} from "../../../SocialMap";
    import {deferredPrompt} from "../../../index";

    interface SocialMediaReferences {
        sub1: HTMLElement;
        socialButtons: HTMLElement[],
        resume1: HTMLElement;
        resume2: HTMLElement;
        install1: HTMLElement;
        install2: HTMLElement;
    }

    @Component({
        components: {SocialMedia, ContactBackground, CardHeader},
        props: {index: Number}
    })
    export default class Contact extends Vue {
        private state: StateManager = stateManager;
        private index?: number;

        isPWA() {
            return isPWA();
        }

        async trigger() {
            const header: any = this.$refs.header;
            if (!this.IsTriggered) {
                this.state.markTriggered(this.index!);
                await header.trigger();
                await Promise.all([
                    this.Refs.sub1.Opacity(0, 1, {duration: 400}).Promise,
                    this.Refs.sub1.Y(20, 0, {duration: 200}).Promise
                ]);
                await Promise.all([
                    this.Refs.socialButtons.Each(async (e, i) => {
                        e.Wait({duration: i * 200}).ScaleX(1.1, 1, {duration: 200});
                        e.Wait({duration: i * 200}).ScaleY(1.1, 1, {duration: 200});
                        return await e.Wait({duration: i * 200}).Opacity(0, 1, {duration: 400}).Promise;
                    })
                ]);
                await Promise.all([
                    this.Refs.resume1.Opacity(0, 1, {duration: 400}).Promise,
                    this.Refs.resume1.Y(20, 0, {duration: 200}).Promise
                ]);
                await Promise.all([
                    this.Refs.resume2.Opacity(0, 1, {duration: 400}).Promise,
                    this.Refs.resume2.Y(20, 0, {duration: 200}).Promise
                ]);

                await Promise.all([
                    this.Refs.install1.Opacity(0, 1, {duration: 400}).Promise,
                    this.Refs.install1.Y(20, 0, {duration: 200}).Promise
                ]);
                await Promise.all([
                    this.Refs.install2.Opacity(0, 1, {duration: 400}).Promise,
                    this.Refs.install2.Y(20, 0, {duration: 200}).Promise
                ])
            }
        }

        Install() {
            deferredPrompt.prompt();
        }

        get Social(): SocialData[] {
            return Object.values(socialMap);
        }


        get IsTriggered(): boolean {
            return this.state.checkTriggered(this.index!)
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
            return "Let's talk!";
        }

        get Refs(): SocialMediaReferences {
            return {
                sub1: this.$refs.sub1 as HTMLElement,
                socialButtons: (this.$refs.sm as Vue[]).Map(e => e.$el) as HTMLElement[],
                resume1: this.$refs.resume1 as HTMLElement,
                resume2: this.$refs.resume2 as HTMLElement,
                install1: this.$refs.install1 as HTMLElement,
                install2: this.$refs.install2 as HTMLElement,
            }
        }
    }
</script>
