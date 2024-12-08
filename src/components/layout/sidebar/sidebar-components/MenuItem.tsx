import Link from 'next/link'
import type { ISidebarItem } from '../sidebar.type'

interface Props {
	item: ISidebarItem
}

export function MenuItem({ item }: Props) {
	return (
		<li>
			<Link
				href={item.url}
				className='group py-3 flex items-center gap-6'
			>
				<item.icon className='min-w-10 group-hover:text-primary transition group-hover:rotate-12' />
				<span>{item.title}</span>
			</Link>
		</li>
	)
}
