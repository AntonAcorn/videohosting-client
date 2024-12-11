import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';

import Layout from '@/components/layout/Layout';
import { Providers } from '@/providers/providers';
import './globals.scss';

const notoSans = Noto_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Video hosting',
	description: 'Video hosting'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={notoSans.className}>
				<Providers>
					<Layout>{children}</Layout>
				</Providers>
			</body>
		</html>
	)
}
