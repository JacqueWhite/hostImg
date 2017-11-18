import React, { Component } from 'react'
import { APIManager } from '../../utils'
import { connect } from 'react-redux'
import actions from '../../actions'

class Photos extends Component {

	componentDidMount(){
		this.props.fetchPhotos(null)
	}

	render(){
		return (
				<div>
					Photos container
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