import { usePathname } from 'next/navigation'
import type { ISidebarItem } from '../sidebar.type'
import { MenuItem } from './MenuItem'
import { match } from 'path-to-regexp'

interface Props {
	title?: string
	menu: ISidebarItem[]
}

export function SidebarMenuItem({ title, menu }: Props) {
	const currentUrl = usePathname()

	return (
		<nav>
			{title && <span className='mb-3 block opacity-30 text-xs uppercase'>{title}</span>}
			<ul className='flex flex-col gap-4'>
				{menu.map(menuItem => (
					<MenuItem
						key={menuItem.title}
						item={menuItem}
						isActive={!!match(menuItem.url)(currentUrl)}
					/>
				))}
			</ul>
			<span
				className='h-[1px] bg-gray-500 my-8 block opacity-50'
				style={{ width: 'calc(100% - 24px)' }}
			></span>
		</nav>
	)
}
