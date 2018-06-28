import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Vet from './Components/Vet'
import Pet from './Components/Pet'
import axios from 'axios'
// import Comment from './components/Comment'




class App extends Component {
  state = {
    vets: []
  }
  componentDidMount() {
    axios.get('/api/vet').then((res) => {
      this.setState({ vets: res.data })
    })

      .catch((err) => {
        console.error(err)
      })
  }


  render() {
    const VetComponent = (props) => {
      return (
        <Vet vets ={this.state.vets} {...props} />
      )
    }

      const PetComponent = (props) => {
        return (
          <Pet pets ={this.state.pets} {...props} />
        )
    }


    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" render={VetComponent} />
            <Route path="/:vetid/pet" render={PetComponent} />
            {/* <Route path="/:vetid/pet/pet:petid/comment" component={Comment}/> */}
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
