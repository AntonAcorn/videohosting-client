import type { LucideIcon } from 'lucide-react'

export interface ISidebarItem {
	icon: LucideIcon
	title: string
	url: string
	isBottomBorder?: boolean
}

export interface ISubscriptionItem {
	avatar: string
	title: string
	isLive: boolean
	url: string
	isNew: LucideIcon
}
