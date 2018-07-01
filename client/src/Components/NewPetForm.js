import React, { Component } from 'react'
import axios from 'axios'

class NewPetForm extends Component {
  state = {
    name: '',
    description: ''
  }

  handleChange = (event) => {
    const name = event.target.name
    const newState = {...this.state}
    newState[name] = event.target.value
    this.setState(newState)
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const payload = {
      name: this.state.name,
      description: this.state.description
    }
    await axios.post('/api/pet', payload)
    await this.props.getAllPet()
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input onChange={this.handleChange} type="text" name="name" value={this.state.name}/>
        </div>
        <div>
          <label htmlFor="picurl">Pet Pic URL: </label>
          <input onChange={this.handleChange} type="text" name="picurl" value={this.state.picurl}/>
        </div>
        <div>
          <label htmlFor="age">Age: </label>
          <input onChange={this.handleChange} type="text" name="age" value={this.state.age}/>
        </div>
        <div>
          <label htmlFor="breed">Breed: </label>
          <input onChange={this.handleChange} type="text" name="breed" value={this.state.breed}/>
        </div>
        <div>
          <label htmlFor="gender">Gender: </label>
          <input onChange={this.handleChange} type="text" name="gender" value={this.state.gender}/>
        </div>
        <div>
          <label htmlFor="review">Review: </label>
          <input onChange={this.handleChange} type="text" name="review" value={this.state.review}/>
        </div>
        <button>Submit</button>
      </form>
    )
  }
}

export default NewPetForm