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
                resolve(photos)
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
                resolve(photo)
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
                resolve(photo)
            })
        })
    }

}