import { STUDIO_PAGE } from '@/config/studio-page.config'
import { Bell, LayoutGridIcon, Upload } from 'lucide-react'
import Link from 'next/link'

export function HeaderLinks() {
	return (
		<div className='flex items-center gap-6 '>
			<Link href={STUDIO_PAGE.UPLOAD_VIDEO}>
				<Upload
					size={20}
					className='opacity-50 hover:opacity-100'
				/>
			</Link>

			<Link href={STUDIO_PAGE.HOME}>
				<LayoutGridIcon
					size={20}
					className='opacity-50 hover:opacity-100'
				/>
			</Link>

			<Link href={STUDIO_PAGE.HOME}>
				<Bell
					size={20}
					className='opacity-50 hover:opacity-100'
				/>
			</Link>
		</div>
	)
}
