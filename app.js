let path = require('path');
let express = require('express');
let routes = require('./routes');
let corn = require('./corn.js');
let app = express();

//代理静态资源
app.use(express.static('static'));

//指定模板文件存放位置
app.set('views', path.join(__dirname, 'views'));
//注册模版引擎
app.engine('html', require('ejs').renderFile);
//指定模版引擎的后缀为html
app.set('view engine', 'html');
//页面路由
app.use('/', routes);

let server = app.listen(4001, function () {
  let host = server.address().address;
  let port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
  //开启定时脚本   
  corn()
});