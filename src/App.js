import React, { Component } from 'react';
import './App.css';
import NumPicker from './NumPicker';

class App extends Component {

  state = {
    num: null,
  }

  render() {
    return (
      <div className="app">
        {this.state.num &&
          <h1>You selected the number: {this.state.num}</h1>
        }
        <NumPicker
          onChange={(val) => this.setState({ num: val })}
          value={this.state.num}
          options={[4, 8, 16, 32, 64]}
        />
      </div>
    );
  }
}

export default App;
