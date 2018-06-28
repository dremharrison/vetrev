import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Vet from './components/Vet'
import Pet from './components/Pet'
import axios from 'axios'
// import Comment from './components/Comment'




class App extends Component {
  state = {
    users: []
  }
  componentDidMount() {
    axios.get('/api/users').then((res) => {
      this.setState({ users: res.data })
    })

      .catch((err) => {
        console.error(err)
      })
  }


  render() {
    const ProjectsPage = (props) => {
      return (
        <Projects users={this.state.users} {...props} />
      )
    }
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Vet} />
            <Route path="/:vetid/pet" component={Pet} />
            {/* <Route path="/:vetid/pet/pet:petid/comment" component={Comment}/> */}
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
