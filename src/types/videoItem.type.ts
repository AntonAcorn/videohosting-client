import type { IChannelItem } from './channelItem.type'

export interface IVideoItem {
	id: string
	title: string
	slug: string
	description: string
	thumbnailUrl: string
	videoFileName: string
	viewsCount: string
	isPublic: boolean
	channel: IChannelItem
	createdAt: string
}

export interface IVideoArray {
	videos: IVideoItem[]
}
