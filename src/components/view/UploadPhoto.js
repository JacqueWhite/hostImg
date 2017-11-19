import React, { Component } from 'react'
import Dropzone from 'react-dropzone'

class UploadPhoto extends Component {
	render(){
		return (
			<div>
				<Dropzone>Drop an Image here, or click to search for an image on your computer.</Dropzone>
			</div>
		)
	}
}

export default UploadPhoto