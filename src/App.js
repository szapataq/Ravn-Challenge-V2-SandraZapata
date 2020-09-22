import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import DetailCharacter from './views/DetailCharacter';
import Home from './views/Characters';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/characters/:id' exact component={DetailCharacter}/>
      </Switch>
    </Router>
  );
}
export default App;

