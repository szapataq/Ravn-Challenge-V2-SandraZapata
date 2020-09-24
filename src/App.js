import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Characters from "./components/Characters";
import DetailCharacter from "./views/DetailCharacter";
import "./style/App.scss";

function App() {
  return (
    <Router>
      <Header />
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
