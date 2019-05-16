const http = require('http');

let server = new http.Server((req, res) => {
  res.end('hello world');
});

server.listen(3000, '172.31.80.253', () => {
  console.log('server listen');
});
