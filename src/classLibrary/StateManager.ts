import {States} from "./States";
import Vue from "vue";
import {AnimateX} from "@kirinnee/animatex";

class StateManager {
	
	public readonly data: { [s: number]: States };
	private size: number;
	private current: number;
	public readonly triggerTracker: { [s: number]: boolean };
	
	constructor(asyncAnimator: AnimateX) {
		this.data = {};
		this.size = 0;
		this.current = -1;
		this.triggerTracker = {};
		asyncAnimator.AssertExtend();
	}
	
	register(values: States) {
		Vue.set(this.data, values.index, values);
		this.size++;
	}
	
	
	trigger(index: number): void {
		const current = this.data[index];
		const ele = document.querySelector("#bkgd .color");
		if (ele != null) {
			ele.BackgroundColor(this.CurrentState.color, current.color, {duration: 400});
		}
		this.current = index;
	}
	
	markTriggered(index: number): void {
		Vue.set(this.triggerTracker, index, true);
	}
	
	checkTriggered(index: number): boolean {
		return this.triggerTracker[index] || false;
	}
	
	get Current(): number {
		return this.current;
	}
	
	get CurrentState() {
		return this.data[this.current] || this.data[0];
	}
	
	get Size(): number {
		return this.size;
	}
}


export {StateManager}
