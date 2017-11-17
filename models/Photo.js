var mongoose = require('mongoose')

var PhotoSchema = new mongoose.Schema({
	profile: {type:mongoose.Schema.Types.Mixed, default: {}},
	image: {type:String, default: ''},
	timestamp: {type:Date, default: Date.now}
})

module.exports = mongoose.model('PhotoSchema', PhotoSchema)