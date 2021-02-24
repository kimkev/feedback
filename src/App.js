import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom' 
// components/pages
import HomePage from './components/HomePage'
import Feedback from './components/Feedback'
import FeedbackList from './components/FeedbackList'
import NotFound from './components/NotFound'


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/feedback" component={Feedback} />
          <Route exact path="/feedbackList" component={FeedbackList} />
          <Route exact path="/404" component={NotFound} />
          {/* last redirect */}
          <Redirect to="/404" />
        </Switch>
      </Router>
    </>
  )
}

export default App;