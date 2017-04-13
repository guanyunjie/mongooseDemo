/**
 * Created by Guanyunjie on 2017/4/13.
 */

var app = require('../app');
var debug = require('debug')('express_node:server');
var http = require('http');

var port = '3000';
app.set('port',port);

/**
 *  开启服务，监听在3000端口
 */
var server = http.createServer(app);
server.listen(port);
server.on('error',onError);
server.on('listening',onListening);


/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}