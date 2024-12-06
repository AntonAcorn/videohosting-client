import type { PropsWithChildren } from 'react'
import { Sidebar } from "./layout/sidebar/Sidebar";
import Content from "./layout/content/Content";


export default function Layout({ children }: PropsWithChildren<unknown>) {
	return (
		<main>
			<Sidebar/>
			<Content>{children}</Content>	
		</main>
	)
}
