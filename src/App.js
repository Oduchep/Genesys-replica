import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from './components/LandingPage';
import Learnable from './components/Learnable';
import SoftwareDeveloper from './components/SoftwareDeveloper';
import ProductDesigner from './components/ProductDesigner';
import Apply from './components/Apply';
import Journal from './components/Journal';
import Frequent from './components/FAQ';
import Footer from './components/Footer';
import MainNav from './components/MainNav';


function App() {
  return (
    <Router>
      <div>
        <MainNav />
        <Route exact path='/' component={Home} />
        <Route path='/learnable' component={Learnable} />
        <Route path='/software developer' component={SoftwareDeveloper} />
        <Route path='/product designer' component={ProductDesigner} />
        <Route path='/apply' component={Apply} />
        <Route path='/journal' component={Journal} />
        <Route path='/FAQ' component={Frequent} />
        <Footer />
      </div>
    </Router>
  )
}

export default App;
