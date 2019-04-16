import {TimeData} from "./TimeData";

class TimelineData {
	private readonly company: string;
	private readonly role: string;
	private readonly start: TimeData;
	private readonly end?: TimeData;
	private readonly description: string;
	
	constructor(company: string, role: string, description: string, start: TimeData, end?: TimeData) {
		this.company = company;
		this.role = role;
		this.start = start;
		this.end = end;
		this.description = description;
	}
	
	private DateToString(sd: TimeData): string {
		return `${sd.month.toUpperCase()} ${sd.year}`;
	}
	
	get Company(): string {
		return this.company;
	}
	
	get Role(): string {
		return this.role;
	}
	
	get Date(): string {
		const end = this.end == null ? "PRESENT" : this.DateToString(this.end);
		return `${this.DateToString(this.start)} - ${end}`
	}
	
	get Description(): string {
		return this.description;
	}
	
}


export {TimelineData}
