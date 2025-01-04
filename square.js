const http = require('http');
const url = require('url');

// Define the port
const PORT = 3000;

http.createServer((req, res) => {
  const queryObject = url.parse(req.url, true).query;
  const num = parseFloat(queryObject.num);

  if (!isNaN(num)) {
    const square = num * num;
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Square of ${num} is: ${square}`);
  } else {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('Please provide a valid number in the query parameter "num".');
  }
}).listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

