
export type EnumDictionary<T extends string | symbol | number, U> = {
	[K in T]: U;
};

export type Comment = {
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
	comments: Comment[]
}

export type InstagramStoryType = {
	id: number
	backgroundImageURL: string
	name: string
	plusIcon: string
	images: string[]
}

export type Nullable<T> = T | null | undefined;