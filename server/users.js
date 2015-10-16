var db = require('./pghelper');

/**
 * ユーザー一覧を取得します
 * @param req
 * @param res
 * @param next
 * @returns {*|ServerResponse}
 */
function getUsers(req, res, next) {
  db.query(
    'SELECT * FROM users',
    [], 
    function(err, datas){
      if (err){
        console.log(err);
        return res.status(400).send('エラーが発生しました');
      }
      return res.send(JSON.stringify(datas));
    }
  );
}

/**
 * ユーザーを登録します
 * @param req
 * @param res
 * @param next
 * @returns {*|ServerResponse}
 */
function postUser(req, res, next) {
  var user = req.body;
  db.query(
    'INSERT INTO users (name, mail) VALUES ($1, $2) ',
    [user.name, user.mail], 
    function(err, datas){
      if (err){
        console.log(err);
        return res.status(400).send('エラーが発生しました');
      }
      return next();
    }
  );
}

exports.getUsers = getUsers;
exports.postUser = postUser;
