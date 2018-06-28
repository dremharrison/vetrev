import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class NewVetForm extends Component {
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
    await axios.post('/api/vet', payload)
    await this.props.getAllVet()
  }

  render () {
    return (

      <form onSubmit={this.handleSubmit}>
      <h1>New Veterinarian</h1>
        <div>
          <label htmlFor="name">Name: </label>
          <input onChange={this.handleChange} type="text" name="name" value={this.state.name}/>
        </div>
        <div>
          <label htmlFor="logourl">Logo URL: </label>
          <input onChange={this.handleChange} type="text" name="logourl" value={this.state.logourl}/>
        </div>
        <div>
          <label htmlFor="location">Location: </label>
          <input onChange={this.handleChange} type="text" name="location" value={this.state.location}/>
        </div>
        <div>
          <label htmlFor="hoursOfOperationOpen">Hours of Operation Open: </label>
          <input onChange={this.handleChange} type="text" name="hoursOfOperationOpen" value={this.state.hoursOfOperationOpen}/>
        </div>
        <div>
          <label htmlFor="hoursOfOperationClose">Hours of Operation Close: </label>
          <input onChange={this.handleChange} type="text" name="hoursOfOperationClose" value={this.state.hoursOfOperationClose}/>
        </div>
        <button>Submit</button>
        {/* below needs to go in submit button without redirecting
        onClick={this.props.history.push('/api/vet')} */}
      </form>
    )
  }
  
}

export default NewVetForm