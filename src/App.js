import React from 'react';
import './App.css';
import calculator from './components/Calculator.js';
import home from './components/home.js';
import Nav from './components/nav.js';
import quote from './components/Quote.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
     <Router>
       <Nav />
       <Switch>
         <Route path='/' exact component={home} />
         <Route path='/calculator' component={calculator} />
         <Route path='/quote' component={quote} />
      </Switch>
    </Router>
  );
}

export default App;
