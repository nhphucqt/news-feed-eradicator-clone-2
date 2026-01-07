import type { SiteList } from "../types/sitelist"
import { abcNewsAu } from "./abc-news-au";
import { hackernews } from "./hackernews";
import { reddit } from "./reddit";
import { substack } from "./substack";
import { twitter } from "./twitter";
import { youtube } from "./youtube";
import { youtube_mobile } from "./youtube_mobile";
import { facebook } from "./facebook";
import { facebook_mobile } from "./facebook_mobile";

const sitelist: SiteList = {
	schemaVersion: 1,
	sites: [
		reddit,
		youtube,
		youtube_mobile,
		facebook,
		facebook_mobile,
		twitter,
		hackernews,
		substack,
		abcNewsAu,
	]
}

export default sitelist;
