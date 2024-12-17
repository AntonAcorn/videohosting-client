import { PUBLIC_PAGE } from '@/config/public-page.config'
import { videoService } from '@/service/video.service'
import type { IVideoItem } from '@/types/videoItem.type'
import { Heading } from '@/ui/Heading'
import { VideoItem } from '@/ui/VideoItem'
import { Flame } from 'lucide-react'
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

export const revalidate = 100
export const dynamic = 'force-static'

export default async function TrendingPage() {
	const videos = await videoService.getTrendingVideos()

	return (
		<section>
			<Heading
				title={'Trending'}
				Icon={Flame}
			></Heading>
			<div className='grid-5-cols'>
				{videos?.length &&
					videos.map((videItem: IVideoItem) => (
						<VideoItem
							key={videItem.id}
							videoItem={videItem}
							Icon={Flame}
						/>
					))}
			</div>
		</section>
	)
}
