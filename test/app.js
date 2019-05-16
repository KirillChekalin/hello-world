const http = require('http');

let server = new http.Server((req, res) => {
  res.end('hello world');
});

server.listen(3000, '127.0.0.1', () => {
  console.log('server listen...');
});
