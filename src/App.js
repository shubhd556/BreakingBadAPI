import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;
