var mongoose = require('mongoose')

var PhotoSchema = new mongoose.Schema({
	profile: {type:mongoose.Schema.Types.Mixed, default: {}},
	image: {type:String, default: ''},
	timestamp: {type:Date, default: Date.now}
})

PhotoSchema.methods.summary = function(){
	var summary = {
		profile: this.profile,
		image: this.image,
		timestamp: this.timestamp,
		id: this._id.toString()	
	}
	return summary
}

module.exports = mongoose.model('PhotoSchema', PhotoSchema)