import { videoService } from '@/service/video.service'
import type { IVideoItem } from '@/types/videoItem.type'
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
			<h1 className='mb-6 text-lg font-bold'>Trending</h1>
			<div className='grid grid-cols-4 gap-5'>
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
