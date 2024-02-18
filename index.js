const http = require('http');
const mysql = require('mysql');

const hostname = '127.0.0.1';
const port = 8081;

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'iB1ibrahi',
  database: 'company_db'
});

const server = http.createServer((req, res) => {
  // Serve "Hello World" message for the root URL
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
  } else {
    // Perform database query
    pool.query('SELECT * FROM employee', (error, results, fields) => {
      if (error) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Internal Server Error');
        console.error('Error executing query:', error);
        return;
      } 
      
      // Send response with query results
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(results));
    });
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
