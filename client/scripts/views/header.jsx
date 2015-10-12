var React = require('react');

//ヘッダの定義
var Header = React.createClass({
  render: function(){
    return (
      <header>
        <h1>ヘッダです</h1>
        <hr/>
      </header>
    );
  }
});

module.exports = Header;
