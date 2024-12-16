import { PUBLIC_PAGE } from '@/config/public-page.config'
import type { IVideoItem } from '@/types/videoItem.type'
import { BadgeCheck, type LucideIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
	videoItem: IVideoItem
	Icon?: LucideIcon
}

export function VideoItem({ videoItem, Icon }: Props) {
	return (
		<div>
			<div className='relative mb-2'>
				<Link
					className='max-w-[250px]'
					href={PUBLIC_PAGE.VIDEO(videoItem.slug)}
				>
					<Image
						className='rounded-md'
						src={videoItem.thumbnailUrl}
						alt={videoItem.title}
						width={250}
						height={140}
					/>
				</Link>

				<Link
					className='absolute left-2 bottom-2'
					href={PUBLIC_PAGE.CHANNEL(videoItem.channel.slug)}
				>
					<Image
						className='rounded-full shadow-md'
						src={videoItem.channel.avatarUrl}
						alt={videoItem.channel.name}
						width={30}
						height={30}
					/>
				</Link>
			</div>

			<div className='mb-2 flex items-center justify-between max-w-[250px]'>
				<div className='flex items-center gap-1'>
					{Icon && (
						<Icon
							className='text-red-500'
							width={20}
							height={20}
						/>
					)}
					{/* TODO: format views */}
					<span className='text-gray-400 text-sm'>
						{/* {videoItem.viewsCount}  */}
						1K views
					</span>
				</div>
				<div>
					{/* TODO: format date */}
					<span className='text-gray-400 text-sm'>{/* {videoItem.createdAt} */}5 days ago</span>
				</div>
			</div>

			<Link href={PUBLIC_PAGE.VIDEO(videoItem.slug)}>
				<div className='line-clamp-2 leading-tight max-w-[250px]'>{videoItem.title}</div>
			</Link>

			<div>
				<Link
					className='flex items-center gap-0.5'
					href={PUBLIC_PAGE.CHANNEL(videoItem.channel.slug)}
				>
					<span className='text-gray-400 text-sm'>{videoItem.channel.slug}</span>
					<span>
						<BadgeCheck
							className='text-green-500'
							height={15}
							width={15}
						/>
					</span>
				</Link>
			</div>
		</div>
	)
}
