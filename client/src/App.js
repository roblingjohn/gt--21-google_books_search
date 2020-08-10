import "./App.css";
import React, { useEffect } from "react";
// import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import Saved from "./containers/Saved/Saved";
import NoMatch from "./containers/NoMatch/NoMatch";
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";

function App() {
  useEffect(() => {
    // axios.get("https://www.googleapis.com/books/v1/volumes?q=harry+potter:keyes&key=AIzaSyCVhgXo09d-7bytDAIYMHwCWeBDzDvWvHE").then((res) => {
    //   console.log(res.data.items[0].volumeInfo.title);
    // });
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
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
