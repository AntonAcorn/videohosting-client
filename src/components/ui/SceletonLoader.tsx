import type { CSSProperties } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props {
	count?: number
	style?: CSSProperties
	className?: string
}

export function SceletonLoader({ count = 1, style, className }: Props) {
	return (
		<>
			{Array.from({ length: count }).map((_, index) => (
				<div
					key={index}
					className={twMerge('w-64 h-36 bg-slate-900 animate-pulse', className)}
					style={style}
				/>
			))}
		</>
	)
}
