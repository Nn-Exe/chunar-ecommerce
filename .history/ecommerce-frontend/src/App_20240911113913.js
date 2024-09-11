import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'; // Create this component for the home page
import Live from './components/Live'; // Create this component for the live page
import Contacts from './components/Contacts'; // Create this component for contacts
import SocialMedia from './components/SocialMedia'; // For the external link

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/live" component={Live} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/social-media" component={SocialMedia} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
