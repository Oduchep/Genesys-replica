import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import SubNav from './components/SubNav';
import Home from './components/LandingPage';
import SoftwareDeveloper from './components/SoftwareDeveloper';
import ProductDesigner from './components/ProductDesigner';
import Apply from './components/Apply';
import Journal from './components/Journal';
import Frequent from './components/FAQ';

function App() {
  return (
    <Router>
      <div>
        <SubNav />
        <Route exact path='/' component={Home} />
        <Route path='/software developer' component={SoftwareDeveloper} />
        <Route path='/product designer' component={ProductDesigner} />
        <Route path='/apply' component={Apply} />
        <Route path='/journal' component={Journal} />
        <Route path='/FAQ' component={Frequent} />
      </div>
    </Router>
  )
}

export default App;
