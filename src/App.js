import React, { Component } from 'react';

import headerPic from './assets/header.png'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-title">
            The Incredible True Story <br /> of Antifragility
          </h1>
        </div>
        <div className="App-intro">
          <p>Have you ever heard of the Gloms?</p>
         
          <p>You probably haven't got much of a clue about the Gloms.<br /> To be fair, the Gloms haven't got much of a clue about the Gloms either.<br />
          You may be wondering, how that's even plausible.</p>
         
          <p>The Gloms are an arguably smart alien race, just like us, the Humans.<br />
          However, it seems we Humans got better and better over time at reminding ourselves what it means to be Humans
          and that's how school subjects like Biology or History were born.</p>

          <p>The Gloms have what in human terms we'd refer to as the memory of a goldfish.<br />
          It'd be hard to find out whether there has ever been attempts at keeping records of historical Glom endeavours because there would be no records of such attempts in the first place.</p> 

          <p>Then what is it that makes a Glom a Glom? Let curiosity lead your way.</p>
        </div>
      </div>
    );
  }
}

export default App;
