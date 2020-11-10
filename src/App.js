import React from 'react';

import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LandingPage from './components/Home/LandingPage';
import Sidebar from './components/Sidebar/Sidebar';
import BullsAndCows from './components/Games/BullsAndCows/BullsAndCows';
import Chopsticks from './components/Games/Chopsticks/Chopsticks';
import ConnectFour from './components/Games/ConnectFour/ConnectFour';
import GuessWho from './components/Games/GuessWho/GuessWho';
import ScotlandYard from './components/Games/ScotlandYard/ScotlandYard';
import MiniHomeButton from './components/Sidebar/MiniHomeButton';

function App() {
  return (
    <BrowserRouter>
      <MiniHomeButton />
      <Sidebar />
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/bullsandcows' component={BullsAndCows} />
        <Route exact path='/chopsticks' component={Chopsticks} />
        <Route exact path='/connectfour' component={ConnectFour} />
        <Route exact path='/guesswho' component={GuessWho} />
        <Route exact path='/scotlandyard' component={ScotlandYard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
