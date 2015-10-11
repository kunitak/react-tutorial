var React = require('react');
var Header = require('./views/header.jsx');//ヘッダをインポート
var Body = require('./views/body.jsx');//ボディをインポート
var Footer = require('./views/footer.jsx');//フッタをインポート

//コンポーネントを一つにまとめる
var Index = React.createClass({
  render:function(){
    return (
      <div>
        <Header/>
        <hr/>
        <Body/>
        <hr/>
        <Footer/>
      </div>
    );
  }
});

React.render(
  <Index />,
  document.getElementById('content')
);
