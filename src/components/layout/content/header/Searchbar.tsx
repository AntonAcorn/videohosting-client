import { PUBLIC_PAGE } from '@/config/public-page.config'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export function Searchbar() {
	const router = useRouter()

	const [searchTerm, setSearchTerm] = useState('')

	function handleSearch(e: React.KeyboardEvent) {
		if (e.key !== 'Enter') return
		e.preventDefault()
		if (searchTerm.trim() !== '') {
			router.push(PUBLIC_PAGE.SEARCH(searchTerm))
		}
	}

	return (
		<div className='w-[80%]'>
			<input
				type='search'
				className='w-[40%] py-1 px-2 bg-transparent outline-none'
				placeholder='Search'
				onChange={e => setSearchTerm(e.target.value)}
				onKeyDown={handleSearch}
			></input>
		</div>
	)
}
