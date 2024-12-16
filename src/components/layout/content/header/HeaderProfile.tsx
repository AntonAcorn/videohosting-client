import { STUDIO_PAGE } from '@/config/studio-page.config'
import Link from 'next/link'
import Image from 'next/image'

export function HeaderProfile() {
	return (
		<div>
			<Link href={STUDIO_PAGE.SETTINGS}>
				{/* TODO: Make avater */}
				<Image
					className='rounded-lg'
					src='/uploads/avatars/redgroup.jpg'
					alt=''
					width={40}
					height={40}
				/>
			</Link>
		</div>
	)
}
