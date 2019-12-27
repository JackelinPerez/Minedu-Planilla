import React from 'react';
import './App.css';
/*Router */
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import Resultados from './components/tableResult';
import Devengados from './components/accrued';
import Hello from './components/home';

class App extends React.Component {
  render() {
    return (
      <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Hello}></Route>           
          <Route path="/resultados" component={Resultados}></Route>
          <Route path="/devengados" component={Devengados}></Route>
        </Switch>
      </div>
    </Router>
    );
  }
}


export default App;