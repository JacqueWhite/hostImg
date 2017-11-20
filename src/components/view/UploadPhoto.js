import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import sha1 from 'sha1';
import superagent from 'superagent';
import actions from '../../actions'
import { APIManager } from '../../utils'

class UploadPhoto extends Component {

	constructor(){
		super()
		this.state = {
			photo: {
				image: '',
				profile: {
		      		id: '5a0f5949c6ce2ab77be05d2b',
		      		username:'testing1'
		    	}
			} 
		}
	}

	updatePhoto(event){
		event.preventDefault()
		let updated = Object.assign({}, this.state.image)
		updated['event.target.id'] = event.target.value
		this.setState({
			image: updated
		})
	}

	submitPhoto(event){
		event.preventDefault()
		console.log('submitPhoto: '+JSON.stringify(this.state.photo))
		if (this.state.photo.image.length == 0){
			alert('Please add an image first.')
			return
		}

		let updated = Object.assign({}, this.state.photo)
		this.props.onCreate(updated)
		console.log('niceeee')
	}

    handlePhotoSubmit(event) {
      event.preventDefault();
      if (this.state.imageUrl) {
	      var myPhoto = {
	       image: this.state.image
	      }
      console.log(myPhoto);
      APIManager.savePhoto(myPhoto)
          .catch(err => console.log(err));
      }
    }

	// imageSelected(files){
	// 	console.log('imageSelected:  ')
	// 	const image = files[0]
	// 	console.log('a')
	// 	const cloudName = 'djjres1vh'
	// 	console.log('b')
	// 	const url = 'https://api.cloudinary.com/v1_1/'+cloudName+'/image/upload'
	// 	console.log('c')
	// 	const timestamp = Date.now()/1000
	// 	const uploadPreset = 'znke3mj4'
	// 	console.log('d')
	// 	const paramsStr = "timestamp="+timestamp+'&upload_preset='+uploadPreset+'SmzbJfKhVTzPjTzyxOWIkRzJu7Q'
	// 	console.log('e')
	// 	const signature = sha1(paramsStr)
	// 	const params = {
	// 		'api_key': '786238863114982',
	// 		'timestamp': timestamp,
	// 		'upload_preset': uploadPreset,
	// 		'signature': signature
	// 	}

	// 	APIManager.uploadFilez(url, image, params)
	// 	.then((uploaded) => {
	// 		console.log('Upload Complete: '+JSON.stringify(uploaded))
	// 		let updated = Object.assign({}, this.state.photo)
	// 		updated['image'] = uploaded['secure_url']
	// 		this.setState({
	// 			photo: updated
	// 		})

	// 		// Cloudinary returns this:
	// 		// {"public_id":"w2wah5zepcihbdvpky3v","version":1484004334,"signature":"cee9e534a282591c60fb83f8e7bdb028108ab6b3","width":360,"height":360,"format":"png","resource_type":"image","created_at":"2017-01-09T23:25:34Z","tags":[],"bytes":21776,"type":"upload","etag":"d5d83eeac7bc222569a7cef022426c9f","url":"http://res.cloudinary.com/dcxaoww0c/image/upload/v1484004334/w2wah5zepcihbdvpky3v.png","secure_url":"https://res.cloudinary.com/dcxaoww0c/image/upload/v1484004334/w2wah5zepcihbdvpky3v.png","original_filename":"apple"}

	// 	})
	// 	.catch((err) => {
	// 		alert(err)
	// 	})


	// }

	uploadFile(files){
		console.log('uploadFile:  ')
		const image = files[0]
		const cloudName = 'djjres1vh'
		const url = 'https://api.cloudinary.com/v1_1/'+cloudName+'/image/upload'
		const timestamp = Date.now()/1000
		const uploadPreset = 'znke3mj4'

		const paramsStr = "timestamp="+timestamp+'&upload_preset='+uploadPreset+'SmzbJfKhVTzPjTzyxOWIkRzJu7Q'

		//cloudinarys security for secret key
		const signature = sha1(paramsStr)
		const params = {
			'api_key': '786238863114982',
			'timestamp': timestamp,
			'upload_preset': uploadPreset,
			'signature': signature
		}

		let uploadRequest = superagent.post(url)
		uploadRequest.attach('file', image)

		Object.keys(params).forEach((key) => {
			uploadRequest.field(key, params[key])
		})

		uploadRequest.end((err, resp) => {
			if (err){
				alert(err)
				return
			}
			console.log('UPLOAD COMPLETE: '+JSON.stringify(resp.body))
			const uploaded = resp.body
			const photoUrl = resp.body.secure_url

			// let updatedImage = Object.assign({}, this.state.image)
			// updatedImage[resp.body.secure_url] = resp.body.secure_url

			let updated = Object.assign({}, this.state.photo)
			updated['image'] = photoUrl
			this.setState({
				photo: updated
			})
			// this.setState({
			// 	image: photoUrl
			// })
			console.log(this.state)
		  })

		APIManager.uploadFilez(url, image, params)
		.then((uploaded) => {
			console.log('Upload Complete: '+JSON.stringify(uploaded))
			let updated = Object.assign({}, this.state.photo)
			updated['image'] = uploaded['secure_url']
			this.setState({
				photo: updated
			})

			// Cloudinary returns this:
			// {"public_id":"w2wah5zepcihbdvpky3v","version":1484004334,"signature":"cee9e534a282591c60fb83f8e7bdb028108ab6b3","width":360,"height":360,"format":"png","resource_type":"image","created_at":"2017-01-09T23:25:34Z","tags":[],"bytes":21776,"type":"upload","etag":"d5d83eeac7bc222569a7cef022426c9f","url":"http://res.cloudinary.com/dcxaoww0c/image/upload/v1484004334/w2wah5zepcihbdvpky3v.png","secure_url":"https://res.cloudinary.com/dcxaoww0c/image/upload/v1484004334/w2wah5zepcihbdvpky3v.png","original_filename":"apple"}

		})
		.catch((err) => {
			alert(err)
		})


		}

	render (){
		return (
			<div style={{background:'#fff'}}>
				<h2>Submit Photo</h2>
				<div className="row">
					<div className="3u 12u$(small)">
						<Dropzone onDrop={this.uploadFile.bind(this)} style={{border:'none', marginTop:12}}>
							<button className="button special small">Add Image</button>
						</Dropzone>					
					</div>
					<div className="3u 12u$(small)">
						<button className="button special small" style={{marginTop:12, marginLeft:12, width:90+'%'}} onClick={this.submitPhoto.bind(this)}>Submit</button>
					</div>
					<div className="6u 12u$(small)">
						<img style={{width:120, float:'right', marginTop:12}} src={this.state.photo.image} />
					</div>
				</div>

				<br /><br /><hr />
			</div>
		)
	}
}

export default UploadPhoto
