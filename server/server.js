var express = require('express');
var app = express();

//ポートの指定
app.set('port', process.env.PORT || 5000);

//ルートパスの指定
var clientPath = __dirname.replace("/server", "/client");
app.use('/', express.static(clientPath));

//redirect NOT FOUND page
//app.use(function(req, res, next){
//	res.status(404);
//	res.sendFile(clientPath + '/404.html');
//});

//エラーが発生した場合の指定
app.use(function(err, req, res, next) {
    console.log(err.stack);
    res.status(500).send(err.message);
});

//指定したポートでリクエスト待機状態にする
app.listen(app.get('port'), function () {
    console.log('server listening on port :' + app.get('port'));
});
