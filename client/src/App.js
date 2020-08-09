import './App.css';
import React, {useEffect} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from "./containers/Home/Home";

function App() {
  useEffect(() => {
    axios.get("/api/config").then((res) => {
      console.log(res.data);
    });
  });
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
