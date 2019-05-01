<template>
    <div>
        <img :class="Base" :src="src" alt="Oops, image could not be found... :<">
    </div>
</template>

<style lang='scss' scoped>


    .center {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .width-based {
        max-width: 100%;
        height: auto;
    }

    .height-based {
        max-height: 100%;
        width: auto;
    }

    .max-based {
        width: 100%;
        height: 100%;
    }
</style>

<script lang='ts'>
	import {Component, Vue} from 'vue-property-decorator';
	
	@Component({
		props: {
			src: String,
			type: String,
			uncenter: String
		}
	})
	export default class Pic extends Vue {
		private type?: "w" | "h" | "b";
		private uncenter?: boolean | null;

		get Base(): string[] {
			const ret = [];
			switch (this.type!) {
				case "w":
					ret.push("width-based");
					break;
				case "h":
					ret.push("height-based");
					break;
				case "b":
					ret.push("max-based");
					break;
			}
			const c = this.uncenter == null;
			console.log("c", this.uncenter, c);
			if (c) ret.push("center");
			return ret;
		}

	}
</script>
