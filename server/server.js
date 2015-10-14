var express = require('express');
var app = express();

app.set('port', process.env.PORT || 5000);

var clientPath = __dirname.replace("/server", "/client");
app.use('/', express.static(clientPath));

//redirect NOT FOUND page
//app.use(function(req, res, next){
//	res.status(400);
//	res.sendFile(clientPath + '/404.html');
//});

app.use(function(err, req, res, next) {
    console.log(err.stack);
    res.status(500).send(err.message);
});

app.listen(app.get('port'), function () {
    console.log('server listening on port :' + app.get('port'));
});
