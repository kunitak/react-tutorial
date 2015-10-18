var React = require('react');
var ReactRouter = require('react-router');
var History = ReactRouter.History;
var Link = ReactRouter.Link;

//ヘッダの定義
var Header = React.createClass({
  mixins: [ History ],
  
  handleClick: function(e){
  	/* ログアウト処理 */
    
    //ログイン画面へ
    this.history.pushState(null, '/');
  },
  render: function(){
    return (
      <header>
        <div style={{position:"absolute", margin: "-15px 0px"}}>
          <h1>ヘッダです</h1>
        </div>
        <div style={{position:"relative", textAlign:"right", paddingTop: "30px"}}>
          <Link to="/portal" style={{paddingRight: "5px"}}>ポータル</Link>
          <Link to="/userbox" style={{paddingRight: "5px"}}>ユーザーリスト</Link>
          <button onClick={this.handleClick}>ログアウト</button>
        </div>
        <hr/>
      </header>
    );
  }
});

module.exports = Header;
