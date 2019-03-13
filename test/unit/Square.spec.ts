import {should} from 'chai';
import {Dog} from "../../src/classLibrary/Dog";

should();

describe("Dog", () => {
	
	let korgi: Dog = new Dog();
	
	it("should return woof when bark", () => {
		korgi.bark().should.equal("woof");
	});
	
});
