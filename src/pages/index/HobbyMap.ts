import {HobbyData} from "../../classLibrary/HobbyData";
import {images} from "./images";


const hobbyMap = [
	new HobbyData("CyanPrint", images.sideProject.cyanprint,
		"<p>CyanPrint's main product is a CLI listed in NPM to scaffold project of any kind quickly. It is a robust templating engine, with the ability to generate different type of files and project based on user input.</p>" +
		"<p>CyanPrint is not just the CLI; it is a full-ecosystem that allows users to publish and share their templates and scaffolds on CyanPrint.dev with simple yet powerful commands. Templates can be grouped into groups, enabling users to curate their own set of templates for their use case.</p>" +
		"<p>CyanPrint runs on Ruby on Rails as the application server, with ELK stack for monitoring. The frontend ruse Vue.js with Typescript, and deployed on Netlify. This project is fully open-sourced at GitLab!</p>",
		"https://cyanprint.dev", [
			images.icons.frontend.vue,
			images.icons.backend.rails,
			images.icons.backend.postgresql
		]),
	
	new HobbyData("Project Sophie", images.sideProject.sophie,
		"<p>Project Sophie is a browser-based visual novel and an idle game that compliments the eventual boredom of idle game with an immersive story and stunning artwork of visual novels.</p>"
		+ "<p>This story follows Princess Sophie, to save her parents from a coup of her kingdom, but hinges of meta-mechanics, such as disconnection from the internet and changing of system time to time travel, to explore and discuss concepts such as existence and reality.</p>"
		+ "<p>The engine for the game running is currently getting a revamp, and once the roadmap is done and development has started, it would be fully open-sourced on GitLab!</p>"
		,
		"https://sophie.moe", [
			images.icons.frontend.sass,
			images.icons.frontend.jquery,
			images.icons.frontend.gulp
		]),
	
	new HobbyData("Anime Capital", images.sideProject.anime,
		"<p>I am a fan of the Japanese' anime culture. However, it is difficult to procure or buy disk or services to view the seasonal series that are currently airing, much less subbed series. As a little side project for my fellow anime friends and me, Anime Capital is a website that streams the newest anime scrapped from various sites. </p>"
		+ "<p>Anime Capital uses a Ruby-based program to scrape the web for English-subbed anime, encode the subtitle into an MP4 file with multiple bitrates. After which, it split the file into 3-second binaries containing a .mpd manifest, which is pushed to a .NET core server while the binaries are pushed to a bucket. The frontend website, running on Vue.js, would then query the API server for the links to these binaries, allowing for streaming and continuously updated anime automatically. This project is fully open-sourced at GitLab!</p>"
		,
		"https://anime.capital", [
			images.black.rb,
			images.icons.frontend.vue,
			images.icons.backend.dotnet,
			images.icons.backend.postgresql,
		
		]),
	
	new HobbyData("Project Nephia", images.sideProject.nephia,
		"<p>Project Nephia is a Java modification to the popular sandbox game, Minecraft, into an MMORPG.  It provides an interface both for programmers and non-programmers to create skill trees, skill effects, GUI, HUD, items and other MMORPG functions to the Minecraft game with a client-agnostic design. </p>",
		"https://bigbulb.studio/nephia", [
			images.black.java
		]),
];

export {
	hobbyMap
}
