import "./App.css";
import React, { useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import Saved from "./containers/Saved/Saved";
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";

function App() {
  useEffect(() => {
    axios.get("/api/config").then((res) => {
      console.log(res.data);
    });
  });
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Home} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
