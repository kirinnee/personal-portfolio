class ProjectData {
	relativePath: string;
	screenshot: string;
	description: string;
	stack: [string, string][];
	
	constructor(relativePath: string, screenshot: string, description: string, stack: { o: string, p: string }[]) {
		this.relativePath = relativePath;
		this.screenshot = screenshot;
		this.description = description;
		this.stack = stack.Map(e => [e.p, e.o] as [string, string]);
	}
}

export {ProjectData}

