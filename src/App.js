import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import ButtonBar from "./ButtonBar";
import Navbar from "./Navbar";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route component={Navbar} />
        <Route component={ButtonBar} />
      </Router>
    );
  }
}

export default App;
