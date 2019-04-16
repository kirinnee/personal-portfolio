<template>
    <div class="background">
        <img :src="contact" alt="Oops, image not found...">
    </div>
</template>

<style lang='scss' scoped>
    .background {
        opacity: 0.2;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        height: 100%;
        left: 50%;

        img {
            width: auto;
            max-height: 100%;
        }
    }
</style>

<script lang='ts'>
	import {Component, Vue} from 'vue-property-decorator';
	import {images} from "../../../images";
	
	@Component({})
	export default class ContactBackground extends Vue {
		data() {
			return {
				contact: images.contact
			}
		}
	}
</script>
