import {images} from "./images";
import {ProjectData} from "../../classLibrary/ProjectData";

const ph = "Nulla sapien nunc, feugiat in bibendum eu, dignissim a sem. Praesent porttitor tristique cursus. Sed lorem ipsum, mattis ut porta at, viverra a nisl. Donec sem orci, dictum id purus vitae, placerat pharetra sem. Pellentesque quis auctor justo. Praesent non dictum erat. Sed condimentum laoreet lectus ut faucibus. Suspendisse sed hendrerit est. Pellentesque magna velit, ullamcorper nec ullamcorper id, commodo eget risus.";
const i = images.projects;

const oh = i.onehealth;

const projectMap = [
	new ProjectData(oh.logo, ph, Object.values(oh.ss), [images.lang.cpp, images.lang.js, images.lang.py]),
	new ProjectData(oh.logo, ph, Object.values(oh.ss), [images.lang.cpp, images.lang.js, images.lang.py]),
	new ProjectData(oh.logo, ph, Object.values(oh.ss), [images.lang.cpp, images.lang.js, images.lang.py]),
];

export {
	projectMap
}
