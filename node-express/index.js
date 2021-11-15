const express = require('express');
const morgan = require('morgan');
const http = require('http');
const path = require('path')



const dishRouter = require('./routes/dishRouter');
const leaderRouter = require('./routes/leaderRouter');
const promoRouter = require('./routes/promotionRouter');
const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json()) ;
//body parser deprecatrd

app.use('/dishes',dishRouter); //mounting
app.use('/leaders',leaderRouter);
app.use('/promotions',promoRouter);



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

