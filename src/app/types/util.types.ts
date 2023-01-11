
export type EnumDictionary<T extends string | symbol | number, U> = {
	[K in T]: U;
};

export type Nullable<T> = T | null | undefined;

export type AppType = {
	name: string
	urlTo: string
	backgroundImageURL: string
}