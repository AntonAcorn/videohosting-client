import type { ISidebarItem } from '../sidebar.type'
import { MenuItem } from './MenuItem'

interface Props {
	title?: string
	menu: ISidebarItem[]
}

export function SidebarMenuItem({ title, menu }: Props) {
	return (
		<nav>
			{title && <span className='mb-3 block opacity-30 text-xs uppercase'>{title}</span>}
			<ul className='flex flex-col gap-4'>
				{menu.map(menuItem => (
					<MenuItem
						key={menuItem.title}
						item={menuItem}
					/>
				))}
			</ul>
			<span className='h-[1px] bg-gray-500 my-8 block w-48 opacity-50'></span>
		</nav>
	)
}
