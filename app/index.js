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

class Badge extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <img src={this.props.user.img}/>
                <h1>Name: {this.props.user.name}
                </h1>
                <h3>username: {this.props.user.username}
                </h3>
            </div>
        )
    }
}

ReactDOM.render(
    <Badge user={USER_DATA}/>, document.getElementById('app'))

// ReactDOM.render(     <App/>, document.getElementById('app'));