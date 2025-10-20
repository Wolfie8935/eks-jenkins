// app.js
const http = require('http');
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type':'text/html'});
  res.end('<h1>Hello there. My name is Aman and this is a test for jenkins</h1>');
});
server.listen(port, ()=> console.log(`Listening on ${port}`));
