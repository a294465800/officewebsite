/**
 * Created by Administrator on 2017/5/6.
 */
//加载express框架
var express = require('express');

//创建应用=> Node.js Http.createServer();
var app = express();

//加载模版引擎
var swig = require('swig');

/*
* 静态文件托管
* __dirname获取当前文件的绝对路径，拼接public后就是静态文件的根目录
* */
app.use('/public',express.static(__dirname + '/public'));

/*
 配置应用模版
 定义当前应用所使用的模版引擎
 第一个参数：模版引擎的名称，同时也是模版文件的后缀；第二个参数表示用于解释处理模版内容的解释方法
 */
app.engine('html',swig.renderFile);

//设置末班文件存放的目录，第一个参数必须为views，第二个参数是目录
app.set('views','./view');

/*
 注册所使用的模版引擎，第一个参数必须是 view engine,
 第二个参数和app.engine这个方法中定义的模版引擎的名称（第一个参数）是一致的
 */
app.set('view engine','html');

//划分路由
app.use('/',require('./routers/main'));

//监听窗口
app.listen(8082);
console.log('开始监听8082端口...');