import React from 'react';

import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LandingPage from './components/Home/LandingPage';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Switch>
        <Route exact path='/' component={LandingPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
