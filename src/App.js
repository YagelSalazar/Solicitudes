import React from 'react';
import './App.css';
import Nav from './Components/Nav'
import Catalogo from './Components/Catalogo'
import Ordenes from './Components/Ordenes'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
      <Router>
        <div class="App">
          <Nav></Nav>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/catalogo" component={Catalogo}></Route>
            <Route path="/ordenes" component={Ordenes}></Route>
          </Switch>
        </div>
      </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home page</h1>
  </div>
)

export default App;
