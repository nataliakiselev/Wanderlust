import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import NewsFeed from './pages/NewsFeed.js';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/newsfeed" component={NewsFeed} />
      </Switch>
    </Router>
  );
}

export default App;
