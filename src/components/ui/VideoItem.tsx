import { PUBLIC_PAGE } from '@/config/public-page.config'
import type { IVideoItem } from '@/types/videoItem.type'
import { BadgeCheck, type LucideIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
	videoItem: IVideoItem
	Icon: LucideIcon
}

export function VideoItem({ videoItem, Icon }: Props) {
	return (
		<div>
			<div>
				<Link href={PUBLIC_PAGE.VIDEO(videoItem.slug)}>
					<Image
						src={videoItem.thumbnailUrl}
						alt={videoItem.title}
						width={250}
						height={140}
					/>
				</Link>

				<Link href={PUBLIC_PAGE.CHANNEL(videoItem.channel.slug)}>
					<Image
						src={videoItem.channel.avatarUrl}
						alt={videoItem.channel.name}
						width={30}
						height={30}
					/>
				</Link>
			</div>

			<div>
				<div>
					{Icon && <Icon />}
					<span>{videoItem.viewsCount} views</span>
				</div>
				<div>
					<span>{videoItem.createdAt}</span>
				</div>
			</div>
			<div>{videoItem.title}</div>
			<div>
				<span>{videoItem.channel.name}</span>
				<span>
					<BadgeCheck />
				</span>
			</div>
		</div>
	)
}
