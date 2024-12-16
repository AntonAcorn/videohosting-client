import { STUDIO_PAGE } from '@/config/studio-page.config'
import { Bell, LayoutGridIcon, Upload } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export async function Header() {
	return (
		<header className='mb-12 flex items-center justify-between px-6'>
			<div className='w-[80%]'>
				<input
					type='search'
					className='w-[40%] py-1 px-2 bg-transparent outline-none'
					placeholder='Search'
				></input>
			</div>
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
		</header>
	)
}
