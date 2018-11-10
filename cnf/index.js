'use strict'

var fs = require('fs')

module.exports = {
	http: {
		port: 3000,
	},
	https: {
		port: 5000,
		options: {
			// key: fs.readFileSync(__dirname+'/server.key'),
			// cert: fs.readFileSync(__dirname+'/server.crt'),
			key: fs.readFileSync(__dirname+'/key.pem'),
			cert: fs.readFileSync(__dirname+'/cert.pem'),
		},
	},
}
