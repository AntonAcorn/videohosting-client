'use client'
import { videoService } from '@/service/video.service'
import type { IVideoItem } from '@/types/videoItem.type'
import { VideoItem } from '@/ui/VideoItem'
import { useQuery } from '@tanstack/react-query'
import { Flame } from 'lucide-react'

export default function Home() {
	const { data, isLoading } = useQuery({
		queryKey: ['explore'],
		queryFn: () => videoService.getExploreVideos()
	})

	return (
		<div>
			<div>{data?.data.videos[0].thumbnailUrl}</div>
			<div>
				{isLoading
					? 'Is loading...'
					: data?.data.videos.length &&
						data.data.videos.map((videItem: IVideoItem) => (
							<VideoItem
								key={videItem.id}
								videoItem={videItem}
								Icon={Flame}
							/>
						))}
			</div>
		</div>
	)
}
