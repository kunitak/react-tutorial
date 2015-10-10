var React = require('react');

var Index = React.createClass({
  render:function(){
  	return (
  		<p>hoge</p>
  	);
  }
});

React.render(
  <Index />,
  document.getElementById('content')
);
