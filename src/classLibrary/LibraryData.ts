class LibraryData {
	color: string;
	name: string;
	link: string;
	description: string;
	
	constructor(color: string, name: string, link: string, description: string) {
		this.name = name;
		this.link = link;
		this.description = description;
		this.color = color;
	}
}

export {LibraryData}
