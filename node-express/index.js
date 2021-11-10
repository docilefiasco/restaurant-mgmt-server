const express = require('express');
const morgan = require('morgan');
const http = require('http');
const path = require('path')



const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json()) ;
//body parser deprecatrd


app.all('/dishes',(req,res,next)=>
{
res.statusCode = 200;
 res.setHeader('Content-Type', 'text/plain');
 next();
 //will look for additional specifications that will match the endpoint dishes
 //carry on the modifications
});

app.get('/dishes',(req,res,next)=>{
res.end('will send all dishes to you!');
});

app.post('/dishes',(req,res,next)=>{
res.end('willl add the dish' + req.body.name + 'with details'+ req.body.description);
});

app.put('/dishes',(req,res,next)=>{
  res.statusCode = 403;
res.end('put not supported on dishes');
});

app.delete('/dishes',(req,res,next)=>{
  
res.end('deleting!');
});

app.get('/dishes/:dishId',(req,res,next)=>{
res.end('will send details of dish:' + req.params.dishId+ 'to you!');
});

app.post('/dishes/:dishId',(req,res,next)=>{
   res.statusCode = 403;
res.end('not supported on dishes/'+ req.params.dishId);
});

app.put('/dishes/:dishId',(req,res,next)=>{
 
res.end('will update dish'+ req.params.dishId);
});

app.delete('/dishes/:dishId',(req,res,next)=>{
  
res.end('deleting!');
});

app.use((req, res, next) => {
app.use(express.static(path.join(__dirname, 'public')));
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>This is an Express Server</h1></body></html>');

});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

