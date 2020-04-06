var http = require('http');
var url = require('url');
var fs = require('fs');

// this creates a new server using the 'http' module
http.createServer(function (req, res) {
	// this parses the url form the request using the 'url' module
	var q = url.parse(req.url, true);
	// add '.' so that it can reference the local directory for the files
	var filename = "." + q.pathname;
	console.log(q.pathname)
	fs.readFile(filename, function(err, data) {
		if (err) {
			res.writeHead(404, {'Content-Type': 'text/html'});
			return res.end("404 Not Found");
		}
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		return res.end()
		});
}).listen(8080);
