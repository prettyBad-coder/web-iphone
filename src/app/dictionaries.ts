import { EnumDictionary } from "app/types";
import { InstagramTab } from "app/enums";

export const instagramTabIndexUrlDictionary: EnumDictionary<InstagramTab, string> = {
	[ InstagramTab.POSTS ]: "/instagram",
	[ InstagramTab.SEARCH ]: "/instagram/search",
	[ InstagramTab.REELS ]: "/instagram/reels",
	[ InstagramTab.SHOP ]: "/instagram/shop",
	[ InstagramTab.PROFILE ]: "/instagram/profile",
}