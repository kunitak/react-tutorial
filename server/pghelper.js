var pg = require('pg'),
    databaseURL = process.env.DATABASE_URL || 'postgres://postgres:postgres@127.0.0.1:5432/postgres';

/**
 * poatgreSQLに接続してSQLを実行する
 * @param sql 実行したいSQL
 * @param values SQLに指定するパラメータ
 * @param callback SQL実行後、処理するイベント
 */
exports.query = function(sql, values, callback) {
  console.log(sql, values);

  pg.connect(databaseURL, function(err, conn, done) {
    if (err) {
      return callback(err);
    }
    try {
      conn.query(sql, values, function(err, res) {
        done();
        if (err) {
          callback(err);
        } else {
          callback(null, res.rows);
        }
      });
    } catch(e) {
      done();
      callback(e);
    }
  });
};
