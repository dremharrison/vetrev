import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Vet from './Components/Vet';
import Pet from './Components/Pet';
import NewVet from './Components/NewVet';
import NewPetForm from './Components/NewPetForm';
import Comment from './Components/Comment';




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
        <Vet vets={this.state.vets} {...props} />
      )
    }

    const PetComponent = (props) => {
      return (
        <Pet pets={this.state.pets} {...props} />
      )
    }


    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={VetComponent} />
            <Route path="/:vetid/pet" component={PetComponent} />
            <Route path="/vet/new" component={NewVet} />
            <Route exact path="/:vetid/pet/new" component={NewPetForm} />
            <Route path="/:vetid/pet/:petid/comment" component={Comment} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
