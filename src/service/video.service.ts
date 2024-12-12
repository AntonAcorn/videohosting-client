import type { IVideoArray, IVideoItem } from '@/types/videoItem.type'
import axios from 'axios'

class VideoService {
	getExploreVideos() {
		return axios.get<IVideoArray>('http://localhost:4200/api/videos/explore/')
	}

	async getTrendingVideos() {
		const response = await axios.get<IVideoItem[]>('http://localhost:4200/api/videos/trending/')
		return response.data
	}
}

export const videoService = new VideoService()
