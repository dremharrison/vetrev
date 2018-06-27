import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import React, { Component } from 'react'
import Vet from './components/Vet'
import Pet from './components/Pet'
import Comment from './components/Comment'


class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Vet}/>
            <Route path="/:id/pet" component={Pet}/>
            <Route path="/:id/pet/pet:id/comments" component={Pet}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
