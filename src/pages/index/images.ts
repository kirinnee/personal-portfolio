import aboutme from "./assets/aboutme.png";
import languages from "./assets/languages.png";
import introduction from "./assets/introduction.png";
import tick from "./assets/tick.png"
import downarrow from "./assets/down-arrow.png";
import skill from "./assets/skill.png";
import timeline from "./assets/timeline.png"
import book from "./assets/book.png";
import contact from "./assets/contact.png";
import project from "./assets/project.png";
import hobby from "./assets/hobby.png";
import arsenal from "./assets/arsenal.png";
import link from "./assets/link.png";
import {Rimage, Rimager} from "@kirinnee/rimage";
import {SortType} from "@kirinnee/core";
import {core} from "./init";

core.AssertExtend();

function getImageW(prepend: string, s: string): { o: string, p: string } {
	return {
		o: require(`./assets/icon/${prepend}/${s}-original.png`),
		p: require(`./assets/icon/${prepend}/${s}-white.png`)
	}
}

function getImage(prepend: string, s: string): { o: string, p: string } {
	return {
		o: require(`./assets/icon/${prepend}/${s}-original.png`),
		p: require(`./assets/icon/${prepend}/${s}-plain.png`)
	}
}

function getBook(s: string): string {
	return require(`./assets/books/${s}.jpg`);
}

function getLanB(s: string): { o: string, p: string } {
	return {
		o: require(`./assets/lang/${s}-ori.png`),
		p: require(`./assets/lang/${s}-black.png`),
	}
}

function getLan(s: string): { o: string, p: string } {
	return {
		o: require(`./assets/lang/${s}-ori.png`),
		p: require(`./assets/lang/${s}-plain.png`),
	}
}

const f = 'frontend';
const b = 'backend';
const d = 'devops';
const m = 'mobile_iot';

let images: any = {
	link,
	aboutme,
	introduction,
	languages,
	tick,
	downarrow,
	skill,
	timeline,
	book,
	project,
	hobby,
	arsenal,
	contact,
	sideProject: {
		cyanprint: require("./assets/sideproj/cyanprint.jpg"),
		anime: require("./assets/sideproj/anime.jpg"),
		nephia: require("./assets/sideproj/nephia.jpg"),
		sophie: require("./assets/sideproj/sophie.jpg"),
		tele: require("./assets/sideproj/tele.jpg"),
	},
	projects: {
		onehealth: {
			logo: require("./assets/projects/oh2.png"),
			ss: {
				ss1: require("./assets/projects/onehealth/oh1.jpg"),
				ss2: require("./assets/projects/onehealth/oh2.jpg"),
				ss3: require("./assets/projects/onehealth/oh3.jpg"),
				ss4: require("./assets/projects/onehealth/oh4.jpg"),
			},
		},
		airbitat: {
			logo: require("./assets/projects/logo2.png"),
			ss: {
				ss1: require("./assets/projects/airbitat/ss1.jpg"),
				ss2: require("./assets/projects/airbitat/ss2.jpg"),
				ss3: require("./assets/projects/airbitat/ss3.jpg"),
				ss4: require("./assets/projects/airbitat/ss4.jpg"),
				ss5: require("./assets/projects/airbitat/ss5.jpg"),
			}
		},
		asiabeau: {
			logo: require("./assets/projects/asiabeau.png"),
			ss: {
				ss1: require("./assets/projects/asiabeau/ss1.jpg"),
			}
		},
		dab: {
			logo: require("./assets/projects/dab.png"),
			ss: {
				ss1: require("./assets/projects/dab/ss1.jpg"),
				ss2: require("./assets/projects/dab/ss2.jpg"),
				ss3: require("./assets/projects/dab/ss3.jpg"),
				ss4: require("./assets/projects/dab/ss4.jpg"),
			}
		},
		hov: {
			logo: require("./assets/projects/hovmand.png"),
			ss: {
				ss1: require("./assets/projects/hovmand/ss1.jpg"),
				ss2: require("./assets/projects/hovmand/ss2.jpg"),
				ss3: require("./assets/projects/hovmand/ss3.jpg"),
				ss4: require("./assets/projects/hovmand/ss4.jpg"),
			}
		},
		hydra: {
			logo: require("./assets/projects/hydrax.png"),
			ss: {
				ss1: require("./assets/projects/hydrax/ss1.jpg"),
				ss2: require("./assets/projects/hydrax/ss2.jpg"),
				ss3: require("./assets/projects/hydrax/ss3.jpg"),
			}
		}
	},
	lang: {
		cpp: getLan('cpp'),
		cs: getLan('cs'),
		java: getLan('java'),
		js: getLan('js'),
		py: getLan('py'),
		rb: getLan('rb'),
		ts: getLan('ts'),
		go: getLan('go'),
	},
	black: {
		cpp: getLanB('cpp'),
		cs: getLanB('cs'),
		java: getLanB('java'),
		js: getLanB('js'),
		py: getLanB('py'),
		rb: getLanB('rb'),
		ts: getLanB('ts')
	},
	heart: {
		w: require("./assets/heart_w.png"),
		c: require("./assets/heart_c.png")
	},
	social: {
		mail: {
			under: require("./assets/social/mail-under.png"),
			over: require("./assets/social/mail-over.png"),
		},
		github: {
			under: require("./assets/social/github-under.png"),
			over: require("./assets/social/github-over.png"),
		},
		gitlab: {
			under: require("./assets/social/gitlab-under.png"),
			over: require("./assets/icon/devops/gitlab-original.png")
		},
		linkedin: {
			over: require("./assets/social/linkedin-over.png"),
			under: require("./assets/social/linkedin-under.png"),
		}
	},
	white: {
		frontend: {
			babel: getImageW(f, 'babel'), //
			bootstrap: getImageW(f, 'bootstrap'),
			gulp: getImageW(f, 'gulp'), //
			jquery: getImageW(f, 'jquery'), //
			react: getImageW(f, 'react'), //
			vue: getImageW(f, 'vuejs'), //
			sass: getImageW(f, 'sass'), //
			webpack: getImageW(f, 'webpack'), //
			yarn: getImageW(f, 'yarn') //
		},
		devops: {
			aws: getImageW(d, 'amazonwebservices'), //
			azure: getImageW(d, 'azure'),//
			azureDevops: getImageW(d, 'azurepipelines'), //
			digitalOcean: getImageW(d, 'digitalocean'),
			docker: getImageW(d, 'docker'), //
			firebase: getImageW(d, 'firebase'), //
			gitlab: getImageW(d, 'gitlab'), //
			heroku: getImageW(d, 'heroku') //
		},
		backend: {
			apache: getImageW(b, 'apache'),
			dotnet: getImageW(b, 'dotnet'),
			express: getImageW(b, 'express'),
			mongodb: getImageW(b, 'mongodb'),
			mysql: getImageW(b, 'mysql'),
			nginx: getImageW(b, 'nginx'),
			nodejs: getImageW(b, 'nodejs'),
			postgresql: getImageW(b, 'postgresql'),
			rabbitmq: getImageW(b, 'rabbitmq'),
			rails: getImageW(b, 'rails'),
			redis: getImageW(b, 'redis'),
			swagger: getImageW(b, 'swagger')
		},
		mobileIot: {
			android: getImageW(m, 'android'),
			arduino: getImageW(m, 'arduino'),
			eeprom: getImageW(m, 'eeprom'),
			flutter: getImageW(m, 'flutter'),
			ble: getImageW(m, 'ble')
		}
	},
	icons: {
		frontend: {
			babel: getImage(f, 'babel'), //
			bootstrap: getImage(f, 'bootstrap'),
			gulp: getImage(f, 'gulp'), //
			jquery: getImage(f, 'jquery'), //
			react: getImage(f, 'react'), //
			vue: getImage(f, 'vuejs'), //
			sass: getImage(f, 'sass'), //
			webpack: getImage(f, 'webpack'), //
			yarn: getImage(f, 'yarn') //
		},
		devops: {
			aws: getImage(d, 'amazonwebservices'), //
			azure: getImage(d, 'azure'),//
			azureDevops: getImage(d, 'azurepipelines'), //
			digitalOcean: getImage(d, 'digitalocean'),
			docker: getImage(d, 'docker'), //
			firebase: getImage(d, 'firebase'), //
			gitlab: getImage(d, 'gitlab'), //
			heroku: getImage(d, 'heroku') //
		},
		backend: {
			apache: getImage(b, 'apache'),
			dotnet: getImage(b, 'dotnet'),
			express: getImage(b, 'express'),
			mongodb: getImage(b, 'mongodb'),
			mysql: getImage(b, 'mysql'),
			nginx: getImage(b, 'nginx'),
			nodejs: getImage(b, 'nodejs'),
			postgresql: getImage(b, 'postgresql'),
			rabbitmq: getImage(b, 'rabbitmq'),
			rails: getImage(b, 'rails'),
			redis: getImage(b, 'redis'),
			swagger: getImage(b, 'swagger')
		},
		mobileIot: {
			android: getImage(m, 'android'),
			arduino: getImage(m, 'arduino'),
			eeprom: getImage(m, 'eeprom'),
			flutter: getImage(m, 'flutter'),
			ble: getImage(m, 'ble')
		}
	},
	books: {
		go: {
			concurrencyInGo: getBook("concurrency_in_go"),
			goInPractice: getBook("go_in_practice"),
			goProgrammingBlueprints: getBook("go_programming_blueprints"),
			goWebProgramming: getBook("go_web_programming"),
			theGoProgrammingLanguage: getBook("the_go_programming_language"),
		},
		csharp: {
			agilePatterns: getBook("agile_patterns_practices"),
			proCSharp: getBook("pro_csharp"),
			modernApiDesign: getBook("modern_api_design"),
			xunitTestPatterns: getBook("xunit_test_patterns"),
			essentialDocker: getBook("essential_docker"),
		},
		design: {
			analysisPatterns: getBook("analysis_patterns"),
			cleanArchitecture: getBook("clean_architecture"),
			cleanCode: getBook("clean_code"),
			cleanCoder: getBook("clean_coder"),
			ddd: getBook("ddd"),
			designPatterns: getBook("design_patterns"),
			objectDesign: getBook("object_design"),
		},
		ruby: {
			eloquentRuby: getBook("eloquent_ruby"),
			learnRails: getBook("learn_rails"),
			metaprogrammingRuby: getBook("metaprogramming ruby"),
			wellGroundedRubyist: getBook("wellgrounded_rubyist"),
			rubyOnRailsTutorial: getBook("ruby_on_rails_tutorial"),
		},
		others: {
			cracking: getBook("cracking"),
			phoenixProject: getBook("phoenix_project"),
			mythicalManMonth: getBook("mythical_man_month"),
			proGit: getBook("progit"),
			refactoring: getBook("refactoring"),
			tdd: getBook("tdd"),
			userStoriesApplied: getBook("user_stories_applied"),
			userStoryMapping: getBook("user_story_mapping"),
			usingDocker: getBook("using_docker"),
		},
		
	}
};

declare var PRODUCTION: boolean;
let imageDeployConfig: any = require("../../../config/image.deploy.config.json")[0];

let config: Rimage = {
	key: imageDeployConfig.key,
	width: imageDeployConfig.width,
	sizes: imageDeployConfig.sizes
};

let rimager: Rimager = new Rimager(core, config, new SortType(), !PRODUCTION);
rimager.ExtendPrimitives();

images = rimager.RegisterImages(images);


export {
	images,
	rimager,
}
