import { COLORS } from '@/app/constants/colors.constants'
import { PUBLIC_PAGE } from '@/config/public-page.config'
import { Menu, Youtube } from 'lucide-react'
import Link from 'next/link'

interface Props {
	toggleSidebar: () => void
}

export function SidebarHeader({ toggleSidebar }: Props) {
	return (
		<div className='w-60 flex items-center gap-8 mb-6'>
			<button onClick={toggleSidebar}>
				<Menu className='opacity-70 hover:opacity-100 transition-opacity' />
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
