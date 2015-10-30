var Dispatcher = require('../dispatchers/dispatcher');

var userActions = {
  //ユーザー一覧の取得
  load: function(target){
    Dispatcher.handleServerAction({
      type: 'load',
      target: target
    });
  },
  //ユーザーの登録
  register: function (target) {
    Dispatcher.handleServerAction({
      type: 'register',
      target: target
    });
  }
};

module.exports = userActions;
