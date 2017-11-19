import superagent from 'superagent'
import Promise from 'bluebird'

export default {

	get: (url, params) => {
		return new Promise((resolve, reject) => {
			superagent
			.get(url)
			.query(params)
			.set('Accept', 'application/json')
			.end((err, response) => {
				if(err){
					reject(err)
					return
				}

				resolve(response.body)
			})
		})
	}

	post: (myPhoto) => {
		return new Promise((resolve, reject) => {
			superagent
			.post('/api/photos', myPhoto)
			.query(params)
			.set('Accept', 'application/json')
			.end((err, response) => {
				if(err){
					reject(err)
					return
				}

				resolve(response.body)
			})
		})
	}

}