var jwt = require('jsonwebtoken');
var authenticatePass = 'secretsauce';

module.exports.login = function(req, res) {

	console.log('logging in user'); 

	var username = req.body.username;
	var password = req.body.password;
	
	// Perform check on whether username and passsword are in valid format

	if(username && password) {
		if (username === "username" && password === "password") {
			var token = jwt.sign({ username: username }, authenticatePass , { expiresIn: 7200 }); 
			res
				.status(200)
				.json({success: true, token: token});
		} else {
			res
				.status(401)
				.json('Unauthorized');
		}
		
	} else {
		res
			.status(401)
			.json('Invalid Data');
	}
}

module.exports.authenticate = function(req, res, next) {
	console.log("authenticate user")

	// token validation logic here
	var headerExists = req.headers.authorization;
	if (headerExists) {
	    var token = req.headers.authorization.split(' ')[1]; //--> Authorization Bearer xxx
	    jwt.verify(token, authenticatePass , function(error, decoded) {
	    	if (error) {
	    		console.log(error);
	    		res.status(401).json('Unauthorized');
	    	} else {
	    		req.user = decoded.username;
	    		next();
	    	}
	    });
	} else {
		res.status(403).json('No token provided');
	}
}