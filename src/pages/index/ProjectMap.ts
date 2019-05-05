import {images} from "./images";
import {ProjectData} from "../../classLibrary/ProjectData";

const i = images.projects;
const devops = images.white.devops;
const iot = images.white.mobileIot;
const back = images.white.backend;
const front = images.white.frontend;

const projectMap = [
	new ProjectData(null, i.onehealth.logo,
		"OneHealth is a digital platform for post-acute care for Singapore’s Ministry of Health, in an attempt to deal with the issue of Singapore’s aging population. I led the development team to implement an API server and deployed it at Azure. I further provisioned a CI/CD pipeline with branching policy and tested strategies to formalise and automate the deployment workflow for testers, designers and engineers, boosting the overall efficiency of the team. To facilitate error detection and analytics, I configured centralised logging and monitoring service within Azure.",
		Object.values(i.onehealth.ss),
		[images.lang.cs, back.dotnet, devops.azure, devops.azureDevops]),
	new ProjectData(null, i.airbitat.logo,
		"Airbitat is an outdoor cooler that aims to provide an environment-friendly deep cooling solution for the notoriously hot weather of tropical Singapore. I worked with engineers and technicians to develop firmware and embedded systems for the cooler in order to allow control from the website via WiFi module and from the mobile app via Bluetooth. " +
		"I only joined the project midway, but my contributions were not insignificant. I improved the original firmware by optimising the transport layer and refactoring to take a more object-oriented approach, allowing for better maintenance. I further revamped the Bluetooth connectivity by changing between the mobile app and the firmware through the introduction of a new routing protocol, and reduced the communication time between the mobile app and the firmware from 7 seconds to 2 seconds by implementing a cache layer.",
		Object.values(i.airbitat.ss),
		[images.lang.cpp, iot.ble, iot.eeprom, iot.arduino, iot.android]),
	new ProjectData(null, i.dab.logo,
		"DAB Technology Platform is an e-commerce platform for factory and industrial solutions, such as vacuum and lifting devices. I formed and led a team to redesign their static site, and provided an e-commerce platform for users to browse and buy items via the website. We carefully worked with an iterative and incremental approach with DAB Technology to improve user experience. I also implemented many optimisations from the original WordPress site, such as implementing a CDN layer, conducting image quantisation and serving image based on the user agent, thereby improving the load time by 60% (3 seconds to 1.2 seconds).",
		Object.values(i.dab.ss),
		[back.rails, front.vue, back.postgresql, devops.docker]),
	new ProjectData(null, i.hov.logo,
		"Hovmand is the world’s largest supplier of lifters, and its products range from pallet trucks to powerful mechanical lifters. It is committed to providing integrated factory and industrial solutions to meet the challenges of proper workplace design, ergonomics, efficiency and cost reduction. As the developer under DAB Technology, I designed an e-commerce platform for the custom-built lifter product range. The website provides a series of questions and narrows down product parts based on the answers, reducing the company spending on hiring customer support for only those parties who are already committing. ",
		Object.values(i.hov.ss),
		[back.rails, front.vue, back.postgresql, devops.docker]),
	new ProjectData(null, i.hydra.logo,
		"When I was working for HydraX, I was the sole developer in the FinTech firm. To help the company kick-start its business, I quickly developed its prototype website’s API by using Ruby on Rails, together with an SPA frontend in Vue.js. The prototype focuses on allowing users to share and discuss ideas on the current trend by doodling on graphs and sharing them as a blog post.",
		Object.values(i.hydra.ss),
		[back.rails, front.vue, back.mysql]),
	new ProjectData(null, i.asiabeau.logo,
		"Under Singapore Beauty Fashion, I built the frontend of their e-commerce platform, AsiaBeau, which allows beauty service providers all over South East Asia to list their beauty services. This platform allows customers to locate and connect with their preferred beauty service providers with minimal hassle. I built the client-facing site with the modern toolchain of React, WebPack, Babel and other frontend tools on the basis of the wireframe that the designers provided.",
		Object.values(i.asiabeau.ss),
		[front.react, front.babel, front.webpack, front.bootstrap])
];

export {
	projectMap
}
