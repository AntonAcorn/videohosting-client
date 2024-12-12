'use client'

import { videoService } from '@/service/video.service'
import type { IVideoItem } from '@/types/videoItem.type'
import { Heading } from '@/ui/Heading'
import { VideoItem } from '@/ui/VideoItem'
import { useQuery } from '@tanstack/react-query'
import { Compass, Flame } from 'lucide-react'

export function Explore() {
	const { data, isLoading } = useQuery({
		queryKey: ['explore'],
		queryFn: () => videoService.getExploreVideos()
	})

	return (
		<section className='mt-12'>
			<Heading
				title={'Explore'}
				Icon={Compass}
			></Heading>
			<div className='grid grid-cols-5 gap-5'>
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
		</section>
	)
}
