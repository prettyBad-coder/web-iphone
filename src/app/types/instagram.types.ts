import { Nullable } from "app/types/util.types";

export type InstagramCommentType = {
	id: number
	userName: string
	content: string
}

export type InstagramPostType = {
	id: number
	userName: string
	imageURL: string
	likesCount: number | string
	profileImageURL: string
	localization: string
	title: string
	comments: InstagramCommentType[]
}

export type InstagramStoryType = {
	id: number
	backgroundImageURL: string
	name: string
	plusIcon: string
	images: string[]
}

export type InstagramUseType = {
	id: number,
	userName: string,
	profilePicture: string,
	postsIds: number[],
	storyId: Nullable<number>,
	followers: number,
	following: number,
	description: string
}