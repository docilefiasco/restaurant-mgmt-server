const http = require('http');

const hostename = 'localhost';
const port = 3000;
//takes function as parameter
const server = http.createServer((req,res) => {
console.log(req.headers); //to know whwere we are gwettin message from

res.statusCode = 200; 
res.setHeader('Content-Type', 'text/html'); //response body is of type html let the client know
res.end('<html><body><h1>hello</h1></body></html>')
})


server.listen(port,hostename, ()=>{console.log(`server running at http://${hostename}:${port}`)});