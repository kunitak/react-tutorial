var React = require('react');
var Header = require('./views/header.jsx');
var Body = require('./views/body.jsx');
var Footer = require('./views/footer.jsx');

//classNameでcssを指定
var Index = React.createClass({
  render:function(){
    return (
      <div>
        <Header/>
        <div className="main">
          <Body/>
        </div>
        <Footer/>
      </div>
    );
  }
});

React.render(
  <Index />,
  document.getElementById('content')
);
