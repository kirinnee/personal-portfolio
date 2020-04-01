<template>
    <Pic :src="timeline" class="background" uncenter :type="Type"/>
</template>

<style lang='scss' scoped>

    .mobile {
        .background {
            width: 100%;
        }
    }

    .background {
        opacity: 0.2;
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        height: 100%;
    }
</style>

<script lang='ts'>
    import {Component, Vue} from 'vue-property-decorator';
    import {images} from "../../../images";
    import Pic from "../../Pic.vue";
    import {isMobile} from "../../../init";

    @Component({
        components: {Pic}
    })
    export default class SkillBackground extends Vue {
        get Type(): "w" | "h" | "b" {
            return isMobile() ? "w" : "h";
        }

        data() {
            return {
                timeline: images.timeline
            }
        }
    }
</script>
