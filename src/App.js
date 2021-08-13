import React from 'react';
import logo from './logo.svg';
import { Switch, Route, withRouter} from 'react-router-dom';
import './App.css';
import SketchPad from './container/SketchPad';

class App extends React.Component {

  componentDidMount(){
    fetch('/api')
    .then(response => response.json())
    .then(data => console.log(data))
  }

  render(){
    return (
      <div className="App">
        Quick Draw
        <SketchPad />
      </div>
    );
  }
}

export default withRouter(App);