import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Review from '../Review/Review';
import ThankYou from '../ThankYou/ThankYou';
import Comments from '../Comments/Comments';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      {/* Used router to create routes for different feedback views */}
      <Router>
        <div>
          <Route path="/" exact>
            <Feeling />
          </Route>
          <Route path="/understanding">
            <Understanding />
          </Route>
          <Route path="/support">
            <Support />
          </Route>
          <Route path="/comments">
            <Comments />
          </Route>
          <Route path="/review">
            <Review />
          </Route>
          <Route path="/thankyou">
            <ThankYou />
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
