'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { domAnimation, LazyMotion } from 'framer-motion'
import { useState, type ReactNode } from 'react'

export function Providers({ children }: { children: ReactNode }) {
	const [queryClient] = useState(() => new QueryClient())

	return (
		<QueryClientProvider client={queryClient}>
			<LazyMotion features={domAnimation}>{children}</LazyMotion>
			{children}
		</QueryClientProvider>
	)
}
