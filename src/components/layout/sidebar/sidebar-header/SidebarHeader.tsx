import { PUBLIC_PAGE } from '@/config/public-page.config'
import { COLORS } from '@/constants/colors.constants'
import { Menu, Youtube } from 'lucide-react'
import Link from 'next/link'

interface Props {
	toggleSidebar: () => void
}

export function SidebarHeader({ toggleSidebar }: Props) {
	return (
		<div className='flex items-center gap-7 mb-12 ml-1.5'>
			<button
				className='opacity-85 hover:opacity-100 transition-opacity'
				onClick={toggleSidebar}
			>
				<Menu />
			</button>
			<Link
				className='flex gap-2 items-center'
				href={PUBLIC_PAGE.HOME}
			>
				<Youtube
					color={COLORS.primary}
					size={30}
				/>
				<span className='font-bold text-lg'>VideoHosting</span>
			</Link>
		</div>
	)
}
