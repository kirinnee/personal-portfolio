<template>
    <div class="side-holder">
        <div class="company a" v-if="ShowCompany" ref="company">{{Info.Company}}</div>
        <div class="time a" v-if="ShowTime" ref="time">{{Info.Date}}</div>
        <div class="role a" v-if="ShowCompany" ref="role">{{Info.Role}}</div>
        <div class="desc a" v-if="ShowCompany" ref="desc">{{Info.Description}}</div>
    </div>
</template>

<style lang='scss' scoped>

    .mobile {
        .side-holder {
            margin-right: 5px;
            margin-left: 0;
        }

        .company {
            font-size: 24px;
            font-weight: 500;
            margin-bottom: 0px;
        }

        .role {
            text-transform: uppercase;
            font-size: 18px;
            margin-bottom: 10px;
            opacity: 0.8;
        }

        .time {
            height: 32px;
            line-height: 30px;
            font-size: 20px;
            margin-bottom: 5px;
        }

        .desc {
            font-size: 16px;
        }

        .a {
            opacity: 0;
        }
    }

    .side-holder {
        margin-right: 5px;
        margin-left: 5px;
    }

    .company {
        font-size: 25px;
        font-weight: 500;
        margin-bottom: 5px;
    }

    .role {
        text-transform: uppercase;
        font-size: 18px;
        margin-bottom: 10px;
        opacity: 0.8;
    }

    .time {
        height: 20px;
        line-height: 26px;
        font-size: 16px;
        margin-bottom: 10px;
    }

    .desc {
        font-size: 14px;

    }

    .a {
        opacity: 0;
        position: relative;
    }
</style>

<script lang='ts'>
    import {Component, Vue} from 'vue-property-decorator';
    import {TimelineData} from "../../../../../classLibrary/TimelineData";
    import {eleFact} from "../../../init";


    interface TimelineRefs {
        company: HTMLElement;
        time: HTMLElement;
        role: HTMLElement;
        desc: HTMLElement;
    }

    @Component({
        props: {
            left: Boolean,
            mobile: Boolean,
            company: Boolean,
            timeline: TimelineData
        }

    })
	export default class TimelineSide extends Vue {
		private left?: boolean;
		private mobile?: boolean;
		private company?: boolean;
		private timeline?: TimelineData;

		async play(): Promise<void> {
			if (!this.left! || this.mobile!) {
				await Promise.all([
					this.Refs.company.X(-15, 0, {duration: 300}).Promise,
					this.Refs.company.Opacity(0, 1, {duration: 200}).Promise
				]);
				await Promise.all([
					this.Refs.time.X(-15, 0, {duration: 300}).Promise,
					this.Refs.time.Opacity(0, 1, {duration: 200}).Promise
				]);
			} else {
				await Promise.all([
					this.Refs.company.X(15, 0, {duration: 300}).Promise,
					this.Refs.company.Opacity(0, 1, {duration: 200}).Promise
				]);
				await Promise.all([
					this.Refs.time.X(15, 0, {duration: 300}).Promise,
					this.Refs.time.Opacity(0, 1, {duration: 200}).Promise
				]);
			}
			await Promise.all([
				this.Refs.role.Y(10, 0, {duration: 300}).Promise,
				this.Refs.role.Opacity(0, 0.7, {duration: 200}).Promise
			]);
			await Promise.all([
				this.Refs.desc.Y(10, 0, {duration: 300}).Promise,
				this.Refs.desc.Opacity(0, 1, {duration: 200}).Promise
			])
		}

		get ShowCompany(): boolean {
			return this.mobile! || this.company!;
		}

		get ShowTime(): boolean {
			return this.mobile! || !this.company!;
		}

		get Info(): TimelineData {
			return this.timeline!;
		}

		get Refs(): TimelineRefs {
			return {

				company: (this.$refs.company || eleFact.DIV()) as HTMLElement,
				time: (this.$refs.time || eleFact.DIV()) as HTMLElement,
				role: (this.$refs.role || eleFact.DIV()) as HTMLElement,
				desc: (this.$refs.desc || eleFact.DIV()) as HTMLElement,
			}
		}

	}
</script>
