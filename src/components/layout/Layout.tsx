'use client'

import cn from 'clsx';
import { useState, type PropsWithChildren } from 'react';
import Content from './content/Content';
import styles from './layout.module.scss';
import { Sidebar } from './sidebar/SidebarMenu';

export default function Layout({ children }: PropsWithChildren<unknown>) {
	const [isSidebarOpened, setSidebarOpened] = useState(false)

	const toggleSidebar = () => {
		setSidebarOpened(!isSidebarOpened)
	}

	return (
		<main
			className={cn(
				'flex min-h-screen p-6',
				isSidebarOpened ? styles.hidenSidebar : styles.openedSidebar
			)}
		>
			<Sidebar toggleSidebar={toggleSidebar} />
			<Content>{children}</Content>
		</main>
	)
}
