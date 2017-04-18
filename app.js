/**
 * Created by Guanyunjie on 2017/4/10.
 */
var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var path = require('path');
var mongooseRouter = require('./router/mongoose/router');
var mysqlRouter = require('./router/mysql/router');

var app = express();
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());

/**
 * 从mongodb拉取数据。
 */
app.post('/mongoose/:service',function (req,res) {
    var service = req.params.service;
    var data = req.body;
    mongooseRouter.proxy(service,data,function (result) {
        if(result.message === 'success'){
            res.status(200).send(result);
        }
        else{
            res.status(200).send({message:'未定义：'+service});
        }
    });
});
/**
 * 向mysql拉取数据。
 */
app.post('/mysql/:service',function (req,res) {
    var data = {
        service:req.param('service'),
        data:req.body
    };
    data = JSON.stringify(data);
    var config = require('./mysql_config').proxy;
    if(!(config.host || config.port || config.path)){
        console.warn('mysql-config  error');
    }

    var request = {
        method:'POST',
        host:config.host,
        port:config.port,
        path:config.path
    };

    var proxy = http.request(request,function (fb) {
        if(fb.statusCode == 200){
            var body = '';
            fb.on('data',function (data) {
                body += data;
            }).on('end',function () {
                res.send(200, body);
            });
        }
        else{
            console.warn('mysql-config error');
            res.send(500,'error');
        }
    });
    proxy.write(data+'\n');
    proxy.end();
});

module.exports = app;