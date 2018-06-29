import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Pet extends Component {
  state = {
    pet: []
  }

  

  async componentWillMount() {
  console.log(this.props)
  const vetId = this.props.match.params.vetid
  const petId = this.props.match.params.vetid
    const response = await axios.get(`/api/vet/${vetId}/pet`)
    const pet = response.data.pets
    this.setState({ pet })
  }

  render() {
    return (
      <div>

        <h1>Pet Review</h1>


        <Link to="/">Back to Vets</Link>
  {console.log(this.state.pet)}

        {this.state.pet.map((pet, index) => {
          
          return (
            <div key={index}>
              <img  className="petLogo" src={pet.logourl}></img>
              <div>{pet.name}</div>
              <div>Age: {pet.age}</div>
              <div>Breed: {pet.breed}</div>
              <div>Gender: {pet.gender}</div>
              <div>Comment:{pet.comment}</div>
            </div>
          )
        })
        }
      </div>
    );
  }
}

export default Pet;