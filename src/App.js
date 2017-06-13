import React, { Component } from 'react';
import './App.css';
import { ClrButton, ClrBadge } from './Clarity';

class App extends Component {
   render() {
      return (
         <div className="App">
            <div className="App-intro">
               <ClrButton>Button</ClrButton>
               <br />
               <ClrBadge number={1} />
            </div>
         </div>
      );
   }
}

export default App;
