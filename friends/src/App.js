import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./components/Login";
import { Route } from "react-router-dom";
import Friends from "./components/Friends";
import PrivateRoute from "./components/PrivateRoute";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Route exact path="/" component={Login}/>
      <PrivateRoute exact path="/friends" component={Friends}/>
    </div>
  );
}

export default App;
