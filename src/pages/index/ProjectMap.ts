import {images} from "./images";
import {ProjectData} from "../../classLibrary/ProjectData";

const i = images.projects;
const devops = images.white.devops;
const iot = images.white.mobileIot;
const back = images.white.backend;
const front = images.white.frontend;

const projectMap = [
	new ProjectData(null, i.onehealth.logo,
		"OneHealth is a digital platform for post-acute care for Singapore's Ministry of Health, in an attempt to solve Singapore's ageing population. I led the team to implement an API server and deployed it at Azure. I further provisioned a CI/CD pipeline with branching policy and test strategies to formalise and automate the deployment workflow for testers, designers and engineers, boosting the overall efficiency of the team. To facilitate error detection and analytics, I configured centralised logging and monitoring service within Azure.",
		Object.values(i.onehealth.ss),
		[images.lang.cs, back.dotnet, devops.azure, devops.azureDevops]),
	new ProjectData(null, i.airbitat.logo,
		"Airbitat is an outdoor cooler aimed to provide an environment-friendly deep cooling solution for the notoriously hot weather of tropical Singapore. I worked with the engineering and technicians to develop firmware and embedded system for the cooler to allow control from the website via WiFi module and mobile app via Bluetooth and developed in the mobile application to control the cooler. \n" +
		"I only joined the project midway, but my contributions were not insignificant. I improved the original firmware by optimising the transport layer and refactoring to take a more Object Oriented approach, allowing for better maintenance. I further revamped the Bluetooth connectivity by changing between the mobile app and the firmware by introducing a new routing protocol and reduced the communication time between the mobile app and the firmware from 7s to 2s by implementing a cache layer.",
		Object.values(i.airbitat.ss),
		[images.lang.cpp, iot.ble, iot.eeprom, iot.arduino, iot.android]),
	new ProjectData(null, i.dab.logo,
		"DAB Technology Platform is an e-commerce platform for factory and industrial solution like vacuum and lifting devices. I formed and led a team to redesign their static site and provided an e-commerce platform for users to browse and buy items via the website. We worked in an iterative and incremental approach carefully with DAB Technology to improve user experience. I also implemented many optimisations from the original WordPress site, such as implementing a CDN layer, image quantisation and serving image based on user-agent, improving load time by 60% (3s to 1.2s).",
		Object.values(i.dab.ss),
		[back.rails, front.vue, back.postgresql, devops.docker]),
	new ProjectData(null, i.hov.logo,
		"Hovmand is the world's largest supplier of lifters and its products ranging from pallet trucks to powerful mechanical lifters. It is committed to providing integrated factory and industrial solutions to meet the challenges of proper workplace design, ergonomics, efficiency and cost reduction. As the developer under DABTechnology, I designed an e-commerce platform for the custom-built lifter product range. The website provides a series of questions and narrows down products parts based on the answers, reducing the company spendings on hiring customer support for only parties who are already committing.",
		Object.values(i.hov.ss),
		[back.rails, front.vue, back.postgresql, devops.docker]),
	new ProjectData(null, i.hydra.logo,
		"When I was working for HydraX, I was the sole developer in the FinTech firm. To help them kickstart their business, I quickly developed their prototype website's API using Ruby and Rails, together with a SPA frontend in vue.js. The prototype focuses on allowing users to share and discuss ideas on the current trend, by doodling on graphs and sharing them as a blog post.",
		Object.values(i.hydra.ss),
		[back.rails, front.vue, back.mysql]),
	new ProjectData(null, i.asiabeau.logo,
		"Under Singapore Beauty Fashion, I built the frontend of their e-commerce AsiaBeau, which is a beauty service providers all over South East Asia to list their beauty services. This platform allows customers to locate and connect with their preferred beauty service providers with minimal hassle. I built the client-facing site with the modern toolchain of Reactjs, WebPack, babel and other frontend tools based on wireframe designers provided.",
		Object.values(i.asiabeau.ss),
		[front.react, front.babel, front.webpack, front.bootstrap])
];

export {
	projectMap
}
