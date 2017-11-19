var Photo = require('../models/Photo')
// running all commands through promises with bluebird, no callbacks
var Promise = require('bluebird');

module.exports = {

    get: function(params, isRaw) {
        return new Promise(function(resolve, reject) {
            Photo.find(params, function(err, photos) {
                if (err) {
                    reject(err)
                    return
                }
                if (isRaw)
                	resolve(photos)
                else {
                	var list = []
                	photos.forEach(function(photo, i){
                		list.push(photo.summary())
                	})
                	resolve(list)
                }
            })
        })
    },


    getById: function(id, isRaw) {
        return new Promise(function(resolve, reject) {
            Photo.findById(id, function(err, photo) {
                if (err) {
                    reject(err)
                    return
                }

                if (isRaw)
                	resolve(photo)
				else 
					resolve(photo.summary())
            })
        })
    },

    post: function(params, isRaw) {
        return new Promise(function(resolve, reject) {
            Photo.create(params, function(err, photo) {
                if (err) {
                    reject(err)
                    return
                }
                
                if (isRaw)
                	resolve(photo)
				else 
					resolve(photo.summary())
            })
        })
    }

}