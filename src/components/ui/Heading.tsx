import type { LucideIcon } from 'lucide-react'

interface Props {
	title: string
	Icon: LucideIcon
}

export function Heading({ title, Icon }: Props) {
	return (
		<div className='flex items-center gap-2 opacity-70 mb-2'>
			{Icon && <Icon className='text-red-500' />}
			<span className='font-bold text-lg uppercase'>{title}</span>
		</div>
	)
}
