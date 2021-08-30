class SkillData {
	name: string;
	level: number;
	plain: string;
	ori: string;

	constructor(name: string, skillLevel: number, data: { o: string, p: string }) {
	    this.name = name;
	    this.plain = data.p;
	    this.ori = data.o;
	    this.level = skillLevel;
	}

}

export {SkillData};
