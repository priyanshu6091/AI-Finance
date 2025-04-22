import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import FinancialHealth from './components/FinancialHealth';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/financial-health" component={FinancialHealth} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
