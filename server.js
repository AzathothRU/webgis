var express = require('express');
var app = express();
var http = require("http").Server(app);

app.use('/scriptsbing',express.static(__dirname + '/node_modules/leaflet-bing-layer/'));
app.use('/scriptswms',express.static(__dirname + '/node_modules/leaflet.wms/src/'));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

http.listen(8888, function(){
	console.log('listening on *:8888');
});