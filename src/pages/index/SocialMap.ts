import {SocialData} from "../../classLibrary/SocialData";
import {images} from "./images";

const sIcon = images.social;

const socialMap: { [s: string]: SocialData } = {
	github: new SocialData(sIcon.github.under, sIcon.github.over, "https://github.com/kirinnee"),
	gitlab: new SocialData(sIcon.gitlab.under, sIcon.gitlab.over, "https://gitlab.com/kirinnee"),
	email: new SocialData(sIcon.mail.under, sIcon.mail.over, "mailto:kirinnee97@gmail.com")
};

export {
	socialMap
}
