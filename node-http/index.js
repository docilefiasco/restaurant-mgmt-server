const http = require('http');

const hostename = 'localhost';
const port = 3002;
const fs = require('fs');
const path = require('path');
//takes function as parameter
const server = http.createServer((req,res) => {
console.log("Request for" + req.url + "by method" + req.method); //to know whwere we are gwettin message from

res.statusCode = 200; 
res.setHeader('Content-Type', 'text/html'); //response body is of type html let the client know

if (req.method == 'GET'){
    var fileUrl;
    if (req.url == '/') fileUrl ='/index.html'; //default
    else fileUrl = req.url; //else take url

    var filePath = path.resolve('./public'+fileUrl); //resolves path
    const fileExt = path.extname(filePath); //make sure the extension is html
    if (fileExt == '.html')
    {
        fs.stat(filePath, (exists) =>{
            if(!exists){
                res.statusCode = 404;
                res.setHeader('Content-Type','text/html');
                res.end('<html><body><h1>404</h1></body</html>');

                return;
            }
            res.statusCode = 200;
                res.setHeader('Content-Type','text/html');
                fs.createReadStream(filePath).pipe(res); //creates a stream to be read into body of res
        })
        
    }
    else{
        res.statusCode = 404;
                res.setHeader('Content-Type','text/html');
                res.end('<html><body><h1>404 not a file</h1></body</html>');
                 return;
    }

}
else {
    res.statusCode = 404;
                res.setHeader('Content-Type','text/html');
                res.end('<html><body><h1>404 req method not supported</h1></body</html>');
                 return;

}
})


server.listen(port,hostename, ()=>{console.log(`server running at http://${hostename}:${port}`)});