const http = require('http');
const url = require('url');

http.createServer((req, res) => {
  const queryObject = url.parse(req.url, true).query;
  const num = parseFloat(queryObject.num);
  
  if (!isNaN(num)) {
    const cube = Math.pow(num, 3);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Cube of ${num} is: ${cube}`);
  } else {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('Please provide a valid number in the query parameter "num".');
  }
}).listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

