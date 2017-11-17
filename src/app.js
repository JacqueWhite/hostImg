import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Photos } from '../components/containers'

class App extends Component {

	render(){
		return (
			<div>
				React Entry Point
				<Photos />
			</div>
		)
	}

}

ReactDOM.render(<App />, document.getElementById('root'))