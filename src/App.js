import React, { Component } from 'react';
import './App.css';
import { ClrButton } from './Clarity';

class App extends Component {
   render() {
      return (
         <div className="App">
            <div className="App-intro">
               <ClrButton>Button</ClrButton>
            </div>
         </div>
      );
   }
}

export default App;
