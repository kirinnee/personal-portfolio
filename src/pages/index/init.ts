require("waypoints/lib/noframework.waypoints.min");
require("waypoints/lib/shortcuts/inview");
import {Core, Kore} from "@kirinnee/core";
import {DOMEx, DOMExtend} from "@kirinnee/domex";
import {EaseFactory, kEaseFactory} from "@kirinnee/kease";
import {EleFact, ElementFactory} from "@kirinnee/elefact";
import * as gsap from 'gsap';
import {TweenLite} from 'gsap';
import {AsynchronousAnimator, GSAPAsyncAnimator, GSAPSyncAnimator, SynchronousAnimator} from "@kirinnee/animate";
import {StateManager} from "../../classLibrary/StateManager";
import {AnimateX, AnimX} from "@kirinnee/animatex";

let text = require('gsap/TextPlugin');

let core: Core = new Kore();
core.ExtendPrimitives();

let domex: DOMEx = new DOMExtend(core);
domex.ExtendPrimitives();

let eases: EaseFactory = new kEaseFactory(gsap);
let eleFact: ElementFactory = new EleFact(domex, "k-space");
let animator: SynchronousAnimator = new GSAPSyncAnimator(TweenLite, text, eases, eleFact, domex, core);
let asyncAnimator: AsynchronousAnimator = new GSAPAsyncAnimator(animator);

const blank = eleFact.DIV({}).Style("display", "none");
document.querySelector("body")!.Append(blank);


let animX: AnimateX = new AnimX(asyncAnimator);
animX.ExtendPrimitives();

let stateManager: StateManager = new StateManager(animX);

const $$ = (i: number): Promise<void> => new Promise<void>(r => setTimeout(r, i));

const isMobile = (): boolean => window.innerHeight > window.innerWidth;

function responsiveAdapter() {
	if (isMobile()) {
		document.querySelector("body")!.AddClass("mobile");
		document.querySelector("body")!.RemoveClass("non-mobile");
	} else {
		document.querySelector("body")!.AddClass("non-mobile");
		document.querySelector("body")!.RemoveClass("mobile");
	}
}

responsiveAdapter();

window.addEventListener("resize", () => {
	console.log("resize");
	responsiveAdapter();
});

export {
	$$,
	core,
	stateManager,
	animX,
	eases,
	eleFact
}
