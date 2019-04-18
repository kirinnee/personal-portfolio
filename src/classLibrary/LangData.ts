class LangData {
	ticks: boolean[];
	color: string;
	under: string;
	over: string;
	
	constructor(ticks: boolean[], color: string, image: { o: string, p: string }) {
		this.ticks = ticks;
		this.color = color;
		this.under = image.p;
		this.over = image.o;
	}
}

export {LangData}
