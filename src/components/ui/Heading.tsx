import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

interface Props {
	children?: ReactNode
	title?: string
	Icon: LucideIcon
}

export function Heading({ title, Icon, children }: Props) {
	return (
		<div className='flex items-center gap-2 opacity-70 mb-4'>
			{Icon && <Icon className='text-red-500' />}
			<span className='font-bold text-lg uppercase'>{title}</span>
			{children}
		</div>
	)
}
