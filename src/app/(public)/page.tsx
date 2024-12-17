import { videoService } from '@/service/video.service'
import type { IVideoItem } from '@/types/videoItem.type'
import { Heading } from '@/ui/Heading'
import { VideoItem } from '@/ui/VideoItem'
import { Flame } from 'lucide-react'
import { Explore } from './explore/Explore'

export const revalidate = 100
export const dynamic = 'force-static'

export default async function Home() {
	const data = await videoService.getTrendingVideos()
	const videos = data.slice(0, 12)

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
			<Explore />
		</section>
	)
}
