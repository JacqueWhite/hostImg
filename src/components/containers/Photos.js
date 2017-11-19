import React, { Component } from 'react'
import { APIManager } from '../../utils'
import { connect } from 'react-redux'
import actions from '../../actions'
import { UploadPhoto } from '../view'

class Photos extends Component {

	componentDidMount(){
		this.props.fetchPhotos(null)
	}

	render(){
		const list = this.props.photos.list.map((photo, i) => {
			return (
				<li key={photo.id}>{photo.id}</li>
			)
		})

		return (
				<div>
					<UploadPhoto />
					<div className="card">
					<ol>
					  { list }	
					</ol>
					</div>
				</div>
			)
	}
}

const stateToProps = (state) => {
	return {
		photos: state.photo
	}
}

const dispatchToProps = (dispatch) => {
	return {
		fetchPhotos: (params) => dispatch(actions.fetchPhotos(params))

	}
}

export default connect(stateToProps, dispatchToProps)(Photos)