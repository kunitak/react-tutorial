var React = require('react');
var ReactDOM = require('react-dom');
var request = require('superagent');

//フォームとリストを一つにしたもの
var UserBox = React.createClass({
  getInitialState:function(){
    return {userData:[]};
  },
  getUsers:function(name, mail) {
    var url = "/get_users";
    //ajax通信する
    request
      .get(url)
      .query({})
      .end(function(err, res){
        if (err) {
          alert(res.text);
        }
        var map = JSON.parse(res.text);
        //表示されている値を更新
        this.setState({userData: map});
      }.bind(this));
  },
  handleAddUser:function(name, mail){
    var url = "/post_user";
    //ajax通信する
    request
      .post(url)
      .send({name: name, mail: mail})
      .end(function(err, res){
        if (err) {
          alert(res.text);
        }
        var map = JSON.parse(res.text);
        //表示されている値を更新
        this.setState({userData: map});
      }.bind(this));
  },
  componentDidMount:function(){
    this.getUsers();
  },
  render:function(){
    return(
      <div style={{width:"300px"}}>
        <UserForm addUser={this.handleAddUser}/>
        <hr/>
        <UserList userData={this.state.userData}/>
      </div>
    );
  }
});

//リスト一行分を表示するコンポーネントを定義
var User = React.createClass({
  propTypes:{
    name: React.PropTypes.string.isRequired,
    mail: React.PropTypes.string
  },
  render:function(){
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.mail}</td>
      </tr>
    );
  }
});

//リストそのものを表示するコンポーネントを定義
var UserList = React.createClass({
  propTypes:{
    userData:React.PropTypes.arrayOf(React.PropTypes.object).isRequired
  },
  render:function(){
    var UserNodes = this.props.userData.map(function(user, index){
      return (
        <User name={user.name} mail={user.mail} key={index}/>
      );
    });
    return (
      <table>
        <tbody>
          <tr>
            <th>名前</th>
            <th>メールアドレス</th>
          </tr>
          {UserNodes}
        </tbody>
      </table>
    );
  }
});

//ユーザーの入力フォームを定義
var UserForm = React.createClass({
  propTypes:{
    addUser:React.PropTypes.func.isRequired
  },
  handleSubmit:function(){
    var name = ReactDOM.findDOMNode(this.refs.name).value.trim();
    var mail = ReactDOM.findDOMNode(this.refs.mail).value.trim();
    if (!name){
      return;
    }
    this.props.addUser(name, mail);
    ReactDOM.findDOMNode(this.refs.name).value = "";
    ReactDOM.findDOMNode(this.refs.mail).value = "";
  },
  render:function(){
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <label>名前</label>
              </td>
              <td>
                <input type="text" ref="name"/>
              </td>
            </tr>
            <tr>
              <td>
                <label>メールアドレス</label>
              </td>
              <td>
                <input type="text" ref="mail"/>
              </td>
            </tr>
          </tbody>
        </table>
        <div style={{textAlign:"right"}}>
          <button onClick={this.handleSubmit}>追加</button>
        </div>
      </div>
    );
  }
});

module.exports = UserBox;
