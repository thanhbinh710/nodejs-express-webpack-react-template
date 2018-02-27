var request = require('request');

module.exports.getExample = function(req, res) {

	// you can write a http request here as well

	var message = {
		"status": "success",
		"message": "Successfully call / GET sample method"
	}

	res
		.status(200)
		.json(message);
	
};