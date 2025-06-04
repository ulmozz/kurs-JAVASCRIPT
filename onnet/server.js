const fs = require('fs'); // file system
const http = require('http'); // Hypertext Transfer Protocol

const port = 3000;
// URL = Uniform Resource Locator ~ adres
http.createServer(function (req, res) { // request (żądanie), response (odpowiedź)
  let path = '';
  if (req.url == '/') {
    path = __dirname + '/views/index.html';
  }
  else {
    path = __dirname + '/views/' + req.url;
  }

  fs.readFile(path, function (err,data) {
    if (err) { // if (err != null) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
}).listen(port);

console.log('Listening on port ' + port); // console.log(`Listening on port ${port}`);