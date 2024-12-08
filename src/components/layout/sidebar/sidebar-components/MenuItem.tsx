import Link from 'next/link'
import type { ISidebarItem } from '../sidebar.type'
import cn from 'clsx'

interface Props {
	item: ISidebarItem
	isActive: boolean
}

export function MenuItem({ item, isActive }: Props) {
	return (
		<li>
			<Link
				href={item.url}
				className='group py-3 flex items-center gap-6'
			>
				<item.icon
					className={cn('min-w-10', {
						'group-hover:text-primary transition group-hover:rotate-12': !isActive
					})}
				/>
				<span
					className={cn({
						'border-b-[1px] border-transparent': !isActive,
						'border-b-[1px] border-white': isActive
					})}
				>
					{item.title}
				</span>
			</Link>
		</li>
	)
}
