import {States} from "./States";
import {AsynchronousAnimator} from "@kirinnee/animate";
import Vue from "vue";

class StateManager {
	
	public readonly data: { [s: number]: States };
	private size: number;
	private current: number;
	private asyncAnimator: AsynchronousAnimator;
	
	constructor(asyncAnimator: AsynchronousAnimator) {
		this.data = {};
		this.size = 0;
		this.current = 0;
		this.asyncAnimator = asyncAnimator;
	}
	
	register(values: States) {
		Vue.set(this.data, values.index, values);
		this.size++;
	}
	
	
	trigger(index: number) {
		const current = this.data[index];
		const ele = document.getElementById("bkgd");
		if (ele != null) {
			this.asyncAnimator.BackgroundColor(ele, this.data[this.current].color, current.color, {duration: 200});
		}
		this.current = index;
	}
	
	get Current(): number {
		return this.current;
	}
	
	get CurrentState() {
		return this.data[this.current];
	}
	
	get Size(): number {
		return this.size;
	}
}


export {StateManager}
