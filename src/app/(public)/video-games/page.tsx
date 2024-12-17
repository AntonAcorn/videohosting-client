import { PUBLIC_PAGE } from '@/config/public-page.config'
import { videoService } from '@/service/video.service'
import type { IVideoItem } from '@/types/videoItem.type'
import { Heading } from '@/ui/Heading'
import { VideoItem } from '@/ui/VideoItem'
import { log } from 'console'
import { Flame, Gamepad2 } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Video games',
	description: 'Best game`s videos.',
	alternates: {
		canonical: PUBLIC_PAGE.VIDEO_GAMES
	},
	openGraph: {
		type: 'website',
		url: PUBLIC_PAGE.VIDEO_GAMES,
		title: 'Video games'
	}
}

export const revalidate = 100
export const dynamic = 'force-static'

export default async function TrendingPage() {
	const videosData = await videoService.getVideoGames()
	const videos = videosData.videos

	console.log(videos)

	return (
		<section>
			<Heading
				title={'Video games'}
				Icon={Gamepad2}
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
