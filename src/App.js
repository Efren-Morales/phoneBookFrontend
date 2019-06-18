import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage';
import UpdatePage from './pages/UpdatePage';


function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path ="/user" component={RegisterPage}/>
        <Route path="/update/:id" component={UpdatePage}/>
    </Switch>
    </Router>
    </div>
  );
}

export default App;
