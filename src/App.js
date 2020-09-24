import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header";
import Characters from "./components/Characters";
import DetailCharacter from "./views/DetailCharacter";
import "./style/App.scss";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <div className="container-info">
          <Characters />
          <Route path="/characters/:id" exact component={DetailCharacter} />
          <Route render={() => <Redirect to="/" />} />
        </div>
      </Switch>
    </Router>
  );
}
export default App;
