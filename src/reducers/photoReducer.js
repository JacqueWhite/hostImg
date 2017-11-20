import constants from '../constants'

var initialState = {
	list: null
}

export default (state = initialState, action) => {

	let updated = Object.assign({}, state)

	switch(action.type){
		case constants.PHOTOS_RECEIVED:
			// console.log('PHOTOS_RECEIVED: ' +JSON.stringify(action.photos))
			updated['list'] = action.photo
			return updated

		case constants.PHOTO_CREATED:
			let updatedList = (updated['list']==null) ? [] : Object.assign([], updated['list'])
			updatedList.unshift(action.photo)
			updated['list'] = updatedList
			return updated

		default:
			return updated
	}

}