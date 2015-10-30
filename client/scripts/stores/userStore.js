var React = require('react');
var ajax = require('./storeUtils').ajax;

var Dispatcher = require('../dispatchers/dispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var userStore = assign({}, EventEmitter.prototype, {
  data: {userData: []},
  addLoadListener: function (callback) {
    this.on('load', callback);
  },
  removeLoadListener: function (callback) {
    this.removeListener('load', callback);
  },
  addRegisterListener: function (callback) {
    this.on('register', callback);
  },
  removeRegisterListener: function (callback) {
    this.removeListener('register', callback);
  },
  getAjaxResult: function(){
    return userStore.data;
  }
});

//バリデーション
var validation = function(target){
  if (!target.name){
    alert('名前を入力してください');
    return false;
  }
  if (!target.mail){
    alert('メールアドレスを入力してください');
    return false;
  }
  return true;
};

userStore.dispatchToken = Dispatcher.register(function (payload) {
  var registerCallback = function(err, res){
    return callback(err, res, 'register');
  }
  var loadCallback = function(err, res){
    return callback(err, res, 'load');
  }
  var callback = function(err, res, name){
    if (err){
      alert(res.text);
      return;
    }
    userStore.data = {userData: JSON.parse(res.text)};
    userStore.emit(name);
  }.bind(userStore);

  var actions = {
    load: function (payload) {
      //ajax通信する
      ajax.get("/get_users", {}, loadCallback);
    },
    register: function (payload) {
      if (!validation(payload.action.target)){
        return;
      }
      //ajax通信する
      ajax.post("/post_user", payload.action.target, registerCallback);
    }
  };

  actions[payload.action.type] && actions[payload.action.type](payload);
});

module.exports = userStore;
