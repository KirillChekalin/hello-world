const http = require('http');

let server = new http.Server((req, res) => {
  res.end('hello world');
});

server.listen(1337, '127.0.0.1');
