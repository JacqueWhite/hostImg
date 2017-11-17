var express = require('express');
var router = express.Router();
var controllers = require('../controllers');

router.get('/:resource', function(req, res, next) {
	var resource = req.params.resource

	var controller = controllers[resource]
	if (controller == null){
		res.json({
			confirmation: 'fail',
			message: 'Invalid Resource'
		})	
		return
	}

	controller.get(req.query, false)
	.then(function(results){
		res.json({
				confirmation: 'success',
				results: results
		})
	})
	.catch(function(err){
		res.json({
				confirmation: 'fail',
				message: err
		})
	})

})

router.get('/:resource/:id', function(req, res, next) {
	var resource = req.params.resource

	var controller = controllers[resource]
	if (controller == null){
		res.json({
			confirmation: 'fail',
			message: 'Invalid Resource'
		})	
		return
	}

	var id = req.params.id
	controller.getById(id, false)
	.then(function(results){
		res.json({
			confirmation: 'success',
			results: results
		})
	})
	.catch(function(err){
		res.json({
			confirmation: 'fail',
			message: 'Not a valid ID'
		})
	})

})

router.get('/:resource', function(req, res, next) {
	var resource = req.params.resource

	var controller = controllers[resource]
	if (controller == null){
		res.json({
			confirmation: 'fail',
			message: 'Invalid Resource'
		})	
		return
	}

	controller.get(req.query, false)
	.then(function(results){
		res.json({
				confirmation: 'success',
				results: results
		})
	})
	.catch(function(err){
		res.json({
				confirmation: 'fail',
				message: 'Not a valid ID'
		})
	})

})

module.exports = router;