import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    inputText:'',
    textLength: 0
  }

  inputChangeHandler = (event) => {
    const inputText = event.target.value;
    this.setState({
      inputText: inputText,
      textLength: inputText.length
    });
  }

  deleteCharHandler = (index) => {
    const letters = this.state.inputText.split('');
    letters.splice(index, 1);
    this.setState({
      inputText: letters.join('')
    });
  }

  render() {
    const style = {
      display: 'inline-block',
      padding: '16px',
      textAlign: 'center',
      margin: '16px',
      border: '1px solid black'
    };

    let letters = this.state.inputText.split('');
    
    let displayLetters = (
      <div>
      {
        letters.map((l,index) => {
          return <CharComponent css={style} click={() => this.deleteCharHandler(index)} letter={l} key={index}/>
        })
      }
      </div>
    );

    return (
      <div className="App">
        <input type="text" onChange={this.inputChangeHandler} value={this.state.inputText}/>
        <p>Length: {this.state.textLength}</p>
        <ValidationComponent length={this.state.textLength}/>
        {displayLetters}
      </div>
    );
  }
}

export default App;
