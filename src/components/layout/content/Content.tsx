import type { PropsWithChildren } from 'react'
import { Header } from './header/Header'

export default function Content({ children }: PropsWithChildren<unknown>) {
	return (
		<div
			className='px-4'
			style={{ flex: '1 1 0' }}
		>
			<Header />
			<section>{children}</section>
		</div>
	)
}
