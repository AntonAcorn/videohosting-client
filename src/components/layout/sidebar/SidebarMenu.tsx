import { MORE_SIDEBAR_DATA, SIDEBAR_DATA } from './sidebar.date'
import { SidebarMenuItem } from './sidebar-components/SidebarMenuItem'
import { SidebarHeader } from './sidebar-header/SidebarHeader'

interface Props {
	toggleSidebar: () => void
}

export function Sidebar({ toggleSidebar }: Props) {
	return (
		<aside className='border-r border-border whitespace-nowrap overflow-hidden'>
			<SidebarHeader toggleSidebar={toggleSidebar} />
			<SidebarMenuItem menu={SIDEBAR_DATA} />

			{/* <SubscriptionMenuItem /> */}

			<SidebarMenuItem
				menu={MORE_SIDEBAR_DATA}
				title='MORE FROM YOUTUBE'
			/>
		</aside>
	)
}
