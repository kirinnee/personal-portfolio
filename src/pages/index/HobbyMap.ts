import {HobbyData} from "../../classLibrary/HobbyData";
import {images} from "./images";


const hobbyMap = [
	new HobbyData("CyanPrint", images.sideProject.cyanprint,
		"<p>CyanPrint’s main product is a CLI listed in NPM to scaffold projects of any kind quickly. It is a robust templating engine with the ability to generate different types of files and projects based on user input.</p>" +
		"<p>CyanPrint is not just a CLI; it is a full ecosystem that allows users to publish and share their templates and scaffolds on CyanPrint.dev with simple yet powerful commands. Templates can be categorised into groups, enabling users to curate their own set of templates for their use case.</p>" +
		"<p>Ruby on Rails is CyanPrint’s application server; it uses an ELK stack for monitoring. The front end uses Vue.js with TypeScript and is deployed on Netlify. This project is fully open sourced on GitLab!</p>",
		"https://cyanprint.dev", [
			images.icons.frontend.vue,
			images.icons.backend.rails,
			images.icons.backend.postgresql
		]),
	
	new HobbyData("Project Sophie", images.sideProject.sophie,
		"<p>Project Sophie is a browser-based visual novel and idle game which aims to ease the eventual boredom of an idle game with the immersive story and stunning artwork of a visual novel.</p>"
		+ "<p>This story follows Princess Sophie as she tries to save her parents from a coup of her kingdom. The tale uses meta-mechanics, such as disconnection from the Internet and the changing of system time to time travel, to explore and discuss themes of existence and reality.</p>"
		+ "<p>The game’s engine is currently being revamped; once the roadmap is done and development has started, it will be fully open sourced on GitLab.</p>"
		,
		"https://sophie.moe", [
			images.icons.frontend.sass,
			images.icons.frontend.jquery,
			images.icons.frontend.gulp
		]),
	
	new HobbyData("Anime Capital", images.sideProject.anime,
		"<p>I am a fan of Japanese anime culture. However, procuring or buying disks or services to view the seasonal series that are currently airing, much less subbed series, is difficult. As a little side project for my fellow anime friends and myself, I developed Anime Capital, which is a website that streams the newest anime scrapped from various sites. </p>"
		+ "<p>Anime Capital uses a Ruby-based program to scrape the web for English-subbed anime and encode the subtitle into an MP4 file with multiple bitrates. After this, it splits the file into three-second binaries containing a .mpd manifest that is pushed to a .NET core server whilst the binaries are pushed to a bucket. The frontend website, running on Vue.js, would then query the API server for the links to these binaries, automatically allowing streaming and continuous updating of anime. This project is fully open sourced at GitLab.</p>"
		,
		"https://anicap.net", [
			images.black.rb,
			images.icons.frontend.vue,
			images.icons.backend.dotnet,
			images.icons.backend.postgresql,

		]),
	
	new HobbyData("Project Nephia", images.sideProject.nephia,
		"<p>Project Nephia is a Java modification to turn the popular sandbox game Minecraft into an MMORPG. It provides an interface both for programmers and non-programmers to create skill trees, skill effects, GUI, HUD, items and other MMORPG functions for the Minecraft game, with a client-agnostic design. </p>",
		"https://bigbulb.studio/nephia", [
			images.black.java
		]),
];

export {
	hobbyMap
}
