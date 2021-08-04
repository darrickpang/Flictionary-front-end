import React from 'react';
import logo from './logo.svg';
import { Switch, Route, withRouter} from 'react-router-dom';
import './App.css';
import SketchPad from './container/SketchPad';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <SketchPad />
      </div>
    );
  }
}

export default withRouter(App);