import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { photoReducer } from '../reducers'

var store;

export default {

	configureStore: () => {
		const reducers = combineReducers({
			photo: photoReducer
		})

		store = createStore(
			reducers, 
			applyMiddleware(thunk)
		)

		return store
	},

	currentStore: () => {
		return store
	}

}