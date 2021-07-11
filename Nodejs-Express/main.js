var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var compression = require('compression');
var helmet = require('helmet');
app.use(helmet());

var topicRouter = require('./routes/topic');
var indexRouter = require('./routes/index');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(compression());
app.get('*', function(request, response, next){//get방식으로 가져오는 모든 요청에만 목록 읽기
  fs.readdir('./data', function(error, filelist){
    request.list=filelist;
    next();
  });
});
app.use('/topic', topicRouter);
app.use('/', indexRouter);

app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!');
});

app.use(function(err,req,res,next){
  console.error(err.stack);
  res.status(500).send('Something broke!');
})

app.listen(3000, function(){
  console.log('Example app listening on port 3000!')
});