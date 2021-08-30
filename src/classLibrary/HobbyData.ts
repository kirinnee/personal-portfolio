class HobbyData {
	name: string;
	screenshot: string;
	stack: [string, string][];
	description: string;
	link: string;

	constructor(name: string, screenshot: string, description: string, link: string, stack: { o: string, p: string }[]) {
	    this.name = name;
	    this.screenshot = screenshot;
	    this.stack = stack.Map(e => [e.p, e.o] as [string, string]);
	    this.description = description;
	    this.link = link;
	}
}

export {HobbyData};
