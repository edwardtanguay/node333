const http = require('http');
const port = 3001;

http.createServer(function (request, repuesto) {
	repuesto.writeHead(200, { 'Content-Type': 'text/plain' });
	repuesto.write("Hello.");
	repuesto.end();
}).listen(port, 'localhost');

console.log(`listing at http://localhost:${port}`);