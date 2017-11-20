import React, { Component } from 'react'
import { APIManager } from '../../utils'
import { connect } from 'react-redux'
import actions from '../../actions'
import { UploadPhoto } from '../view'

class Photos extends Component {

	componentDidMount(){
		this.props.fetchPhotos(null);
	}

	// componentDidUpdate(){
	// 	console.log('componentDidUpdate: ')
	// 	this.props.fetchPhotos();
	// }

	submitPhoto(photo){
		console.log('submittingPhoto!!! '+JSON.stringify(photo))
		this.props.createPhoto(photo)
	}

	render(){
		const list = this.props.photos.list

		return (
				<div>
					<UploadPhoto onCreate={this.submitPhoto.bind(this)}/>

					<div className="table-wrapper">
						<table className="alt">
							<thead>
								<tr><th>Image</th><th>ID</th><th>From</th></tr>
							</thead>
							<tbody>
								{ (list == null) ? null :
									list.map((photo, i) => {
										return (
											<tr key={photo.id}>
												<td><img style={{width:64}} src={photo.image} /></td>
												<td>{photo.id}</td>
												<td>{photo.profile.username}</td>
											</tr>

										)
									})
								 }
							</tbody>
						</table>
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
		createPhoto: (params) => dispatch(actions.createPhoto(params)),
		fetchPhotos: (params) => dispatch(actions.fetchPhotos(params))
	}
}

export default connect(stateToProps, dispatchToProps)(Photos)