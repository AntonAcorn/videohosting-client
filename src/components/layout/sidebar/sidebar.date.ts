import {
	CircleAlert,
	CirclePlay,
	Compass,
	Flame,
	FolderHeart,
	Gamepad2,
	History,
	Settings,
	TvMinimalPlay
} from 'lucide-react'

import { PUBLIC_PAGE } from '@/config/public-page.config'

import type { ISidebarItem } from './sidebar.type'

export const SIDEBAR_DATA: ISidebarItem[] = [
	{
		icon: Compass,
		title: 'Explore',
		url: PUBLIC_PAGE.HOME
	},
	{
		icon: Flame,
		title: 'Trending',
		url: PUBLIC_PAGE.TRENDING
	},
	{
		icon: Gamepad2,
		title: 'Video games',
		url: PUBLIC_PAGE.VIDEO_GAMES,
		isBottomBorder: true
	},
	{
		icon: TvMinimalPlay,
		title: 'My channel',
		url: PUBLIC_PAGE.MY_CHANNEL
	},
	{
		icon: CirclePlay,
		title: 'Subscriptions',
		url: PUBLIC_PAGE.SUBSCRIPTIONS
	},
	{
		icon: History,
		title: 'History',
		url: PUBLIC_PAGE.HISTORY
	},
	{
		icon: FolderHeart,
		title: 'Liked videos',
		url: PUBLIC_PAGE.LIKED_VIDEOS,
		isBottomBorder: true
	}
]

export const MORE_SIDEBAR_DATA: ISidebarItem[] = [
	{
		icon: Settings,
		title: 'Settings',
		url: PUBLIC_PAGE.SETTINGS
	},
	{
		icon: CircleAlert,
		title: 'Send feedback',
		url: PUBLIC_PAGE.FEEDBACK
	}
]
