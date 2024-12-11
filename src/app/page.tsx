'use client'
import { videoService } from '@/services/video.service'
import type { IVideoItem } from '@/types/videoItem.type'
import { VideoItem } from '@/ui/VideoItem'
import { useQuery } from '@tanstack/react-query'
import { Flame, type LucideIcon } from 'lucide-react'

interface Props {
	videoItem: IVideoItem
	icon: LucideIcon
}

export default function Home({ videoItem, icon }: Props) {
	const { data, isLoading } = useQuery({
		queryKey: ['explore'],
		queryFn: () => videoService.getExploreVideos()
	})

	if (!data) return

	console.log(data)

	return (
		<>
			<h1>Hello!</h1>
			<div>
				{isLoading
					? 'Is loading...'
					: data.data.length &&
						data.data.map(videItem => (
							<VideoItem
								key={videItem.id}
								videoItem={videItem}
								icon={Flame}
							/>
						))}
			</div>
		</>
	)
}
