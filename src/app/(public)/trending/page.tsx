import { PUBLIC_PAGE } from '@/config/public-page.config'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Trending',
	description: 'Best videos in trends.',
	alternates: {
		canonical: PUBLIC_PAGE.TRENDING
	},
	openGraph: {
		type: 'website',
		url: PUBLIC_PAGE.TRENDING,
		title: 'Trending'
	}
}

export default function TrendingPage() {
	return <></>
}
