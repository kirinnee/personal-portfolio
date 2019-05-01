class ProjectData {
	logo: string;
	description: string;
	stack: [string, string][];
	screenshots: string[];
	
	constructor(logo: string, description: string, screenshots: string[], stack: { o: string, p: string }[]) {
		this.logo = logo;
		this.description = description;
		this.screenshots = screenshots;
		this.stack = stack.Map(e => [e.p, e.o] as [string, string]);
	}
}

export {ProjectData}

