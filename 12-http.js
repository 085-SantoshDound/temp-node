const http = require('http');
const { clearScreenDown } = require('readline');
//const server: http.Server;
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('welcome');
  }
  if (req.url === '/contactus') {
    res.end('here is our shot');
  }

  res.end(
    `<h1>Oops!</h1>
    <p> seems to find the page you are looking for</p>
    <a href="/">back home </a>
    <a href="/contactus">back contact us</a>
    `
  );
});
server.listen(5000);
