import type { IVideoItem } from './videoItem.type'

export interface IChannelItem {
	id: string
	name: string
	slug: string
	description: string
	isVerified: boolean
	avatarUrl: string
	bannerUrl: string

	videos: IVideoItem[]
	subscribers: []
	createdAt: []
}
