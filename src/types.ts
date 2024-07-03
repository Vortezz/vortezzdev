export type AlertData = {
	text: string,
	type: "success" | "warning" | "error" | "info",
}

export type ErrorData = {
	error: string,
}

export type AuthorizeAppData = {
	icon: string,
	name: string,
}

export type AccountData = {
	token: string,
	account: {
		username: string,
		emails: { email: string, primary: boolean, verified: true }[],
		icon: string,
		description: string,
		settings: {
			theme: string,
			language: string,
			data_saver: boolean,
		},
		verified: boolean,
		has_2fa: boolean,
		created_at: string,
		permission_level: number,
	}
}

export type BlogCategoryData = {
	uri_name: string,
	name: string,
	description: string,
	thumbnail: string,
}

export type BlogAuthorData = {
	username: string,
	icon: string,
}

export type BlogPostData = {
	slug: string,
	title: string,
	description: string,
	thumbnail: string,
	content: string,
	categories: BlogCategoryData[],
	created_at: string,
	updated_at: string,
	author: BlogAuthorData,
}

export type RichTextData = {
	content: string,
	files: Map<string, File | string>
}