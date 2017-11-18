import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Photos } from './components/containers'
import store from './stores'
import { Provider } from 'react-redux'

const app = (
	<Provider store = { store.configureStore() }>
		<div>
			React Entry Point
			<Photos />
		</div>
	</Provider>
)

ReactDOM.render(app, document.getElementById('root'))