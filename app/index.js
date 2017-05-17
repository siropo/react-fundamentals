var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

var USER_DATA = {
    name: 'Viktor Ivanov',
    username: 'Siropo',
    img: 'https://www.allacronyms.com/2251542pngu.png'
}

class App extends React.Component {
    render() {
        return (
            <div>
                hello react 
            </div>
        )
    }
}

class Avatar extends React.Component {
  render() {
    return (
      <img src={this.props.img} />
    )
  }
}

class Label extends React.Component {
  render() {
    return (
      <h1>Name: {this.props.name} </h1>
    )
  }
}

class ScreenName extends React.Component {
  render() {
    return (
      <h3>Username: {this.props.username}</h3>
    )
  }
}

class Badge extends React.Component {
  render() {
    return (
      <div>
        <Avatar img={this.props.user.img}/>
        <Label name={this.props.user.name} />
        <ScreenName username={this.props.user.username} />
      </div>
    )
  }
}

ReactDOM.render(
  <Badge user={USER_DATA} />,
  document.getElementById('app')
);