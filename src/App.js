import React, { Component } from 'react';

import AntifragilityWorld from './assets/header.png';
import Glom from './assets/glom.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-title">
            The Incredible True Story <br /> of Antifragility
          </h1>
          <img className="AntifragilityWorld" src={AntifragilityWorld} alt="Antifragility World" width="100%" />
        </div>
        <div className="App-section">
          <p>Have you ever heard of the Gloms?</p>
         
          <p>You probably haven't got much of a clue about the Gloms.<br /> To be fair, the Gloms haven't got much of a clue about the Gloms either.<br />
          You may be wondering, how that's even plausible.</p>
         
          <p>The Gloms are an arguably smart alien race, just like us, the Humans.<br />
          However, it seems we Humans got better and better over time at reminding ourselves what it means to be Humans
          and that's how school subjects like Biology or History were born.</p>

          <p>The Gloms have what in human terms we'd call the memory of a goldfish.<br />
          It'd be hard to find out whether there have ever been attempts at keeping records of historical Glom endeavours because there would be no records of such attempts in the first place.</p> 

          <p>Then what is it that makes a Glom a Glom? Let curiosity lead your way.</p>
        </div><br />
        <div className="App-section">
          <h2>Anatomy of a Glom</h2>
          <div className="Glom-section-content">
            <img className="glom" src={Glom} />
            <div>
              <p style={{marginTop:0}}>Every Glom's brain matter is part of a networked collective intelligence called The Glom. <br />
              It's quite hard to determine when the Gloms are talking about a specific Glom and when they are referring to The Glom.</p>
              <p>However, their brain has tiny compartments to store things which are absolutely secret and should not be broadcasted, like for instance their private keys.</p>
              <p>Current questions the Gloms are wrapping their collective knowledge pool around:<br />
              When did I start?<br />
              Where did I start?<br />
              Is this Glomy jello or Glomy snot?<br />
              </p>              
              <p>The Gloms also have at least 27 recognised genders and new ones are always popping up.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
