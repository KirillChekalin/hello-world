const http = require('http');

let server = new http.Server((req, res) => {
  res.end('hello world');
});

server.listen(3000, 'http://ec2-34-226-249-175.compute-1.amazonaws.com', () => {
  console.log('server listen...');
});
