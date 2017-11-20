import constants from '../constants'
import { APIManager } from '../utils'

export default {

	fetchPhotos: (params) => {
		return (dispatch) => {
			APIManager
			.get('/api/photo', params)
			.then(response => {
				console.log("RESPONSE: " + JSON.stringify(response))
				dispatch({
					type: constants.PHOTOS_RECEIVED,
					photos: response.results
				})
			})
			.catch((err) => {
				console.log("ERROR: " + err)
			})
		}
	},

	createPhoto: (params) => {
		return (dispatch) => {
			APIManager
			.post('/api/photo', params)
			.then(response => {
				console.log("POSTING: " + JSON.stringify(response))
				dispatch({
					type: constants.PHOTO_CREATED,
					photo: response.result
				})
			})
			.catch((err) => {
				console.log("ERROR: " + err)
			})
		}
	},

	photosReceived: (photos) => {
		return{
			type: constants.PHOTOS_RECEIVED,
			photos: photos
		}

	}

}