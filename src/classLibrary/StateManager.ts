import {States} from "./States";
import {AsynchronousAnimator} from "@kirinnee/animate";

class StateManager {
	
	private readonly data: { [s: number]: States };
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
		this.data[values.index] = values;
		this.size++;
		console.log(this.data);
	}
	
	get Size(): number {
		return this.size;
	}
	
	trigger(index: number) {
		const current = this.data[index];
		const ele = document.getElementById("bkgd");
		if (ele != null) {
			console.log("data", this.data);
			console.log("color", this.data[this.current], this.current);
			this.asyncAnimator.BackgroundColor(ele, this.data[this.current].color, current.color, {duration: 200});
		}
		this.current = index;
	}
	
	get Current(): number {
		return this.current;
	}
	
	
}


export {StateManager}
