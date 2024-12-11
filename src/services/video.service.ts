import type { IVideoItem } from '@/types/videoItem.type'
import axios from 'axios'

class VideoService {
	getExploreVideos() {
		return axios.get<IVideoItem[]>('http://localhost:4200/api/videos/explore/')
	}
}

export const videoService = new VideoService()
