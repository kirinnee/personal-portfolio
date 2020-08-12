import {SkillData} from "../../classLibrary/SkillData";
import {images} from "./images";

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
		ansible: new SkillData('Ansible', 0.6, iDevops.ansible),
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


export {
	skillMap
}
