const http = require('http');
const querystring = require('querystring');

http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <form method="POST">
        Name: <input type="text" name="name" /><br>
        Email: <input type="email" name="email" /><br>
        <button type="submit">Submit</button>
      </form>
    `);
  } else if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      const { name, email } = querystring.parse(body);
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(`<h1>Submitted: ${name} - ${email}</h1>`);
    });
  }
}).listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

