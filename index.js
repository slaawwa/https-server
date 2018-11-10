'use strict';

var cnf = require('./cnf')

var http = require('http')
var https = require('https')

var serverHttp = http.createServer(function(req, res) {
	unifiedHandler(req, res)
})

serverHttp.listen(cnf.http.port, function() {
	console.log(`Server listening on port ${cnf.http.port}`)
})

https.createServer(cnf.https.options, function(req, res) {
	unifiedHandler(req, res)
})
.listen(cnf.https.port, function() {
	console.log(`Server listening on port ${cnf.https.port}`)
})

var unifiedHandler = (req, res) => {

  res.writeHead(200, {'Content-Type': 'text/html'})

  res.end(`
  <!DOCTYPE html>
  <html>
    <head>
    </head><body>
      <p> Hello, world </p>
    </body>
  </html>`)
}


