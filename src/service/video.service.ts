import { customAxios } from '@/app/api/axios'
import type { IVideoArray, IVideoItem } from '@/types/videoItem.type'

class VideoService {
	private _VIDEOS = '/videos'

	getExploreVideos() {
		return customAxios.get<IVideoArray>(`${this._VIDEOS}/explore/`)
	}

	async getTrendingVideos() {
		const response = await customAxios.get<IVideoItem[]>(`${this._VIDEOS}/trending/`)
		return response.data
	}

	async getVideoGames() {
		const response = await customAxios.get<IVideoArray>(`${this._VIDEOS}/games/`)
		return response.data
	}

	getAll(searchTerm: string | null) {
		return customAxios.get<IVideoArray>(
			`${this._VIDEOS}`,
			searchTerm
				? {
						params: { searchTerm }
					}
				: {}
		)
	}
}

export const videoService = new VideoService()
