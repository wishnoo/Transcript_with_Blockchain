var http = require('http');

var server = http.createServer(function (req,res) {
  res.writeHead(200,{'Content-Type':'text/plain'});
  res.end('hey wishnoo');
});

server.listen(3000,'127.0.0.1');
console.log('Listening to port');
