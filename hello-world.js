
// including custom modules for date and time
var dt = require('./firstmodule');

// built-in module for http communication
const http = require('http');

// module for url splitting
var url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	var q = url.parse(req.url, true).query;
	var text = q.year + " " + q.month;
	res.end(text);
});

server.listen(port, hostname, () => {
	console.log('The date and time are currently: ' + dt.myDateTime());
});

