var React = require('react');

//フッタの定義
var Footer = React.createClass({
  render: function(){
    return (
      <footer style={{textAlign: "center"}}>
        <hr/>
        <span>フッタです</span>
      </footer>
    );
  }
});

module.exports = Footer;
