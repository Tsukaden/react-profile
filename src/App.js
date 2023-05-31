import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/header.js';
import About from './pages/about.js';
import Portfolio from './pages/portfolio.js';
import Contact from './pages/contact.js';
import Resume from './pages/resume.js';
import Footer from './components/Footer/footer.js';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
