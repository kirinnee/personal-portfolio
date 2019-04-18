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
import {Rimage, Rimager} from "@kirinnee/rimage";
import {SortType} from "@kirinnee/core";
import {core} from "./init";
import {SkillData} from "../../classLibrary/SkillData";
import {SocialData} from "../../classLibrary/SocialData";

core.AssertExtend();

function getImage(prepend: string, s: string): { o: string, p: string } {
	return {
		o: require(`./assets/icon/${prepend}/${s}-original.png`),
		p: require(`./assets/icon/${prepend}/${s}-plain.png`)
	}
}

function getBook(s: string): string {
	return require(`./assets/books/${s}.jpg`);
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
	aboutme,
	introduction,
	languages,
	tick,
	downarrow,
	skill,
	timeline,
	book,
	project,
	contact,
	lang: {
		cpp: getLan('cpp'),
		cs: getLan('cs'),
		java: getLan('java'),
		js: getLan('js'),
		py: getLan('py'),
		rb: getLan('rb'),
		ts: getLan('ts')
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

const iFrontend = images.icons.frontend;
const iBackend = images.icons.backend;
const iDevops = images.icons.devops;
const iMobileIoT = images.icons.mobileIot;

const skillMap = {
	fontend: {
		vue: new SkillData('Vue', 0.5, iFrontend.vue),
		react: new SkillData('react', 0.2, iFrontend.react),
		babel: new SkillData('Babel', 0.7, iFrontend.babel),
		webpack: new SkillData('Webpack', 0.7, iFrontend.webpack),
		sass: new SkillData('Sass', 0.4, iFrontend.sass),
		yarn: new SkillData('Yarn', 0.6, iFrontend.yarn),
		jquery: new SkillData('jQuery', 0.6, iFrontend.jquery),
		gulp: new SkillData('gulp', 0.5, iFrontend.gulp),
		bootstrap: new SkillData('bootstrap', 0.2, iFrontend.bootstrap)
	},
	devops: {
		docker: new SkillData('Docker', 0.9, iDevops.docker),
		firebase: new SkillData('FireBase', 0.4, iDevops.firebase),
		gitlab: new SkillData('GitLab', 0.7, iDevops.gitlab),
		azureDevops: new SkillData('Azure Devops', 0.8, iDevops.azureDevops),
		heroku: new SkillData('Heroku', 0.3, iDevops.heroku),
		aws: new SkillData('AWS', 0.5, iDevops.aws),
		azure: new SkillData('Azure', 0.5, iDevops.azure),
		digitalOcean: new SkillData('Digital Ocean', 0.7, iDevops.digitalOcean)
		
	},
	backend: {
		apache: new SkillData('Apache', 0.3, iBackend.apache),
		express: new SkillData('Express', 0.6, iBackend.express),
		dotnet: new SkillData('DotNet', 1.0, iBackend.dotnet),
		mysql: new SkillData('MySQL', 0.6, iBackend.mysql),
		rabbitmq: new SkillData('Rabbit MQ', 0.1, iBackend.rabbitmq),
		mongodb: new SkillData('Mongo DB', 0.3, iBackend.mongodb),
		postgres: new SkillData('PostgreSQL', 0.7, iBackend.postgresql),
		rails: new SkillData('Rails', 0.9, iBackend.rails),
		swagger: new SkillData('Swagger', 0.7, iBackend.swagger),
		redis: new SkillData('Redis', 0.6, iBackend.redis),
		nginx: new SkillData('nginx', 0.4, iBackend.nginx),
		node: new SkillData('node', 0.8, iBackend.nodejs)
	},
	mobileIot: {
		android: new SkillData('Android Native', 0.6, iMobileIoT.android),
		arduino: new SkillData('Arduino', 0.5, iMobileIoT.arduino),
		eeprom: new SkillData('EEPROM', 0.3, iMobileIoT.eeprom),
		flutter: new SkillData('Flutter', 0.2, iMobileIoT.flutter),
		ble: new SkillData('BLE', 0.5, iMobileIoT.ble)
	}
};

const sIcon = images.social;

const social: { [s: string]: SocialData } = {
	github: new SocialData(sIcon.github.under, sIcon.github.over, "https://github.com/kirinnee"),
	gitlab: new SocialData(sIcon.gitlab.under, sIcon.gitlab.over, "https://gitlab.com/kirinnee"),
	email: new SocialData(sIcon.mail.under, sIcon.mail.over, "mailto:kirinnee97@gmail.com")
};

export {
	images,
	rimager,
	skillMap,
	social
}
