import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DetailCharacter from "./views/DetailCharacter";
import Characters from "./views/Characters";
import "./style/App.scss";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container-info">
        <Characters />
        <Switch>
          <Route path="/characters/:id" exact component={DetailCharacter} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
