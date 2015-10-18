var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var History = ReactRouter.History;
var ReactDOM = require('react-dom');
var Header = require('./views/header.jsx');
var Body = require('./views/body.jsx');
var UserBox = require('./views/userbox.jsx');
var Footer = require('./views/footer.jsx');

var Index = React.createClass({
  render: function(){
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

var Top = React.createClass({
  mixins: [ History ],

  handleSubmit:function(e){
    e.preventDefault();
    /* ログイン処理 */

    //ポータルページへ
    this.history.pushState(null, '/portal');
  },
  render:function(){
    return (
      <div>
        <div className="main">
          <h1>ログイン</h1>
          <form onSubmit={this.handleSubmit}>
            <input placeholder="userid"/>
            <input placeholder="password"/>
            <div style={{textAlign:"cener"}}>
              <button type="submit">ログイン</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

var Main = React.createClass({
  render:function(){
    return (
      <div>
        <Header/>
        <div className="main">
          {this.props.children}
        </div>
        <Footer/>
      </div>
    );
  }
});

var Routes = (
  <Route path="/" component={Index}>
    <IndexRoute component={Top}/>
    <Route path="/top" component={Top}/>
    <Route path="/portal" component={Main}>
      <IndexRoute component={Body}/>
      <Route path="/userbox" component={UserBox}/>
    </Route>
  </Route>
);

ReactDOM.render(
  <Router>{Routes}</Router>,
  document.getElementById('content')
);
