'use client'
import { videoService } from '@/service/video.service'
import { Heading } from '@/ui/Heading'
import { useQuery } from '@tanstack/react-query'
import { Search } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { SceletonLoader } from '@/ui/SceletonLoader'
import { VideoItem } from '@/ui/VideoItem'
import type { IVideoArray } from '@/types/videoItem.type'

export function SearchPage() {
	const searchParams = useSearchParams()

	const { data, isLoading } = useQuery({
		queryKey: ['search', searchParams.get('term')],
		queryFn: async (): Promise<IVideoArray> => {
			const searchTerm = searchParams.get('term')
			const result = await videoService.getAll(searchTerm)
			return result.data
		}
	})

	return (
		<section>
			<Heading Icon={Search}>Search &quot;{searchParams.get('term')}&quot;</Heading>

			<div className='grid-5-cols'>
				{isLoading ? (
					<SceletonLoader
						count={6}
						className='h-36 rounded-md'
					/>
				) : data?.videos ? (
					data.videos.map(video => (
						<VideoItem
							key={video.id}
							videoItem={video}
						/>
					))
				) : (
					<p>Videos not found!</p>
				)}
			</div>
		</section>
	)
}
