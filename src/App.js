import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Authorization from './pages/Authorization/Page';
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Authorization} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
