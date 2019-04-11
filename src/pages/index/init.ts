import {Core, Kore} from "@kirinnee/core";
import {DOMEx, DOMExtend} from "@kirinnee/domex";
import {EaseFactory, kEaseFactory} from "@kirinnee/kease";
import {EleFact, ElementFactory} from "@kirinnee/elefact";
import * as gsap from 'gsap';
import {TweenLite} from 'gsap';
import {AsynchronousAnimator, GSAPAsyncAnimator, GSAPSyncAnimator, SynchronousAnimator} from "@kirinnee/animate";
import {StateManager} from "../../classLibrary/StateManager";

let text = require('gsap/TextPlugin');

let core: Core = new Kore();
core.ExtendPrimitives();

let domex: DOMEx = new DOMExtend(core);
domex.ExtendPrimitives();

let eases: EaseFactory = new kEaseFactory(gsap);
let eleFact: ElementFactory = new EleFact(domex, "k-space");
let animator: SynchronousAnimator = new GSAPSyncAnimator(TweenLite, text, eases, eleFact, domex, core);
let asyncAnimator: AsynchronousAnimator = new GSAPAsyncAnimator(animator);

let stateManager: StateManager = new StateManager(asyncAnimator);

export {
	core,
	asyncAnimator,
	stateManager
}
