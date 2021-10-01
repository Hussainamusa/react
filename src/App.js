import React from 'react'
import './App.css'
// import Contact from './components/Contact'
import Home from './components/Home'
// import Portfolio from './components/Portfolio'
import About from './components/About'
// import Subnote from './components/Subnote'
import {Switch, Route} from 'react-router-dom'
import Contactpage from './components/Contactpage'
function App() {
  return (
    <main>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact  path="/about" component={About}/>
          <Route exact path="/contact" component={Contactpage}/>
        </Switch>
    </main>
  );
}

export default App;
