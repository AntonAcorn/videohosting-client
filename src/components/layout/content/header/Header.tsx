import { HeaderLinks } from './HeaderLinks'
import { HeaderProfile } from './HeaderProfile'
import { Searchbar } from './Searchbar'

export function Header() {
	return (
		<header className='mb-12 flex items-center justify-between px-6'>
			<Searchbar />
			<HeaderLinks />
			<HeaderProfile />
		</header>
	)
}
