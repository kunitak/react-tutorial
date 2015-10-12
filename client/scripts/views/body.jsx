var React = require('react');

//ボディの定義
var Body = React.createClass({
  render: function(){
    return (
      <div style={{textAlign: "center"}}>
        <h1>ボディです</h1>
      </div>
    );
  }
});

module.exports = Body;
