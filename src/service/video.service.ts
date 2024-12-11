'use client'

import type { IVideoArray } from '@/types/videoItem.type'
import axios from 'axios'

class VideoService {
	getExploreVideos() {
		return axios.get<IVideoArray>('http://localhost:4200/api/videos/explore/')
	}
}

export const videoService = new VideoService()
