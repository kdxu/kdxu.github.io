import React, { Component } from 'react';
import icon from './icon.png';
import './App.css';
import { Navbar, Jumbotron, ButtonGroup, Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">kdxu.fornothing.net</h1>
        </header>
        <h2> About </h2>
          Kyoko Kadowaki. boxing, swimming, and running tiny company.
        <hr/>
        <h2> Links </h2>
        <ButtonGroup vertical>
          <Button bsStyle="link" href="https:/github.com/kdxu">github</Button>
          <Button bsStyle="link" href="https:/twitter.com/kdxu">twitter</Button>
          <Button bsStyle="link" href="https://medium.com/@kdxu">medium</Button>
          <Button bsStyle="link" href="https://keybase.io/kdxu">keybase</Button>
        </ButtonGroup>
        <hr/>
          kyoko.kadowaki [at] gmail.com
      </div>
    );
  }
}

export default App;
