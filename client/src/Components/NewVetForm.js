import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class NewVetForm extends Component {
  state = {
    name: "",
    streetAddress: "",
    cityStateZip: "",
    phoneNumber: "",
    hoursOfOperationOpen: "",
    hoursOfOperationClose: "",
    logourl: "",
    website: "",
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
    streetAddress: this.state.streetAddress,
    cityStateZip: this.state.cityStateZip,
    phoneNumber: this.state.phoneNumber,
    hoursOfOperationOpen: this.state.hoursOfOperationOpen,
    hoursOfOperationClose: this.state.hoursOfOperationClose,
    logourl: this.state.logourl,
    website: this.state.website,
    }
    

    await axios.post('/api/vet', payload)
    await this.props.preventDefault()
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
          <label htmlFor="streetAddress">Street Address: </label>
          <input onChange={this.handleChange} type="text" name="streetAddress" value={this.state.streetAddress}/>
        </div>
        <div>
          <label htmlFor="cityStateZip">City, State Zip: </label>
          <input onChange={this.handleChange} type="text" name="cityStateZip" value={this.state.cityStateZip}/>
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number: </label>
          <input onChange={this.handleChange} type="text" name="phoneNumber" value={this.state.phoneNumber}/>
        </div>
        <div>
          <label htmlFor="hoursOfOperationOpen">Hours of Operation Open: </label>
          <input onChange={this.handleChange} type="text" name="hoursOfOperationOpen" value={this.state.hoursOfOperationOpen}/>
        </div>
        <div>
          <label htmlFor="hoursOfOperationClose">Hours of Operation Close: </label>
          <input onChange={this.handleChange} type="text" name="hoursOfOperationClose" value={this.state.hoursOfOperationClose}/>
        </div>
        <div>
          <label htmlFor="website">Website: </label>
          <input onChange={this.handleChange} type="text" name="website" value={this.state.website}/>
        </div>
        <button>Submit</button>
        {/* below needs to go in submit button without redirecting
        onClick={this.props.history.push('/api/vet')} */}
      </form>
    )
  }
  
}

export default NewVetForm