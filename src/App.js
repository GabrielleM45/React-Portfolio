import React from 'react';
import Home from './pages/home';
import ContactMePage from './pages/contactMe';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';


function App() {
  return (

    <Router>
      <Switch>
        <Route path='/' component={ Home } exact />
        <Route path='/contactMe'  component={ ContactMePage } exact />
      </Switch>
    </Router>

);
};



export default App;
