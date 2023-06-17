const http = require('http');

http.createServer(function (req, res) {
	res.write("Hello Panda, hoop jy werk lekker!");
	res.end();
}).listen(3000);

console.log('Listening on port 3000');
