import React, { Component } from 'react'
import { Photos } from '../containers'

class Home extends Component {
	render(){
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-6">
					Profile
					</div>
					<div className="col-xs-6">
					<Photos />
					</div>
				</div>
			</div>
		)
	}
}

export default Home