/**
 * Created by Zahar on 02.09.2015.
 */
var http = require('http');
var express = require('express');
var socketio = require('socket.io');

//var waitingPlayer;

var app = express();
var server = http.createServer(app);
var io = socketio(server);

io.on('connection', onConnection);

app.use(express.static(__dirname + '/client'));
server.listen(8080, function(){console.log('Server started.');});

function onConnection(sock) {
    sock.emit('msg', 'Hello!');

    sock.on('msg', function(txt) {
        io.emit('msg', txt);
    });
}
