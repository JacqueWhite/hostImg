import constants from '../constants'

var initialState = {

}

export default (state = initialState, action) => {

	let updated = Object.assign({}, state)

	switch(action.type){
		case constants.PHOTOS_RECEIVED:
			console.log('PHOTOS_RECEIVED: ' +JSON.stringify(action.photos))

			return updated

		default:

			return updated

	}

}