import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import NewVetNav from './NewVetNav';
import NewVetHeader from './NewVetHeader';

class NewVetForm extends Component {
  state = {
    name: "",
    logourl: "",
    streetAddress: "",
    cityStateZip: "",
    phoneNumber: "",
    hoursOfOperationOpen: "",
    hoursOfOperationClose: "",
    website: "",
  }



  handleChange = (event) => {
    const name = event.target.name
    const newState = { ...this.state }
    newState[name] = event.target.value
    this.setState(newState)
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    const payload = {
      name: this.state.name,
      logourl: this.state.logourl,
      streetAddress: this.state.streetAddress,
      cityStateZip: this.state.cityStateZip,
      phoneNumber: this.state.phoneNumber,
      hoursOfOperationOpen: this.state.hoursOfOperationOpen,
      hoursOfOperationClose: this.state.hoursOfOperationClose,
      website: this.state.website,
    }


    await axios.post('/api/vet', payload)
    this.props.history.push("/")
  }

  render() {
    return (


      <div className="vetFormParentDiv">
        <NewVetHeader />
        <NewVetNav />
        <div className="newVetHeaderDiv">
        <h3 className="mb-3" style={{color: "white", fontStyle: "bold"}}>Add a new vet, then add a review!</h3>
        </div>

        <div className="d-flex justify-content-center mb-3 mt-5">

          <img className="newVetFormImgOne" src="/images/dog_standing.png" />
          <Form className="newVetFormDiv border p-3" onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Name: </Label>
              <Input onChange={this.handleChange} placeholder='e.g. "Main St. Vet"' type="text" name="name" value={this.state.name} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="logourl">Logo URL: </Label>
              <Input onChange={this.handleChange} placeholder='e.g. "http://www.domain.com/pic"' type="text" name="logourl" value={this.state.logourl} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="streetAddress">Street Address: </Label>
              <Input onChange={this.handleChange} placeholder='e.g. "123 Main St."' type="text" name="streetAddress" value={this.state.streetAddress} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="cityStateZip">City, State Zip: </Label>
              <Input onChange={this.handleChange} placeholder='e.g. "123 Main St."' type="text" name="cityStateZip" value={this.state.cityStateZip} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="phoneNumber">Phone Number: </Label>
              <Input onChange={this.handleChange} placeholder='e.g. "Atlanta, GA 30309"' type="text" name="phoneNumber" value={this.state.phoneNumber} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="hoursOfOperationOpen">Hours of Operation Open: </Label>
              <Input onChange={this.handleChange} placeholder='e.g. "8:00AM"' type="text" name="hoursOfOperationOpen" value={this.state.hoursOfOperationOpen} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="hoursOfOperationClose">Hours of Operation Close: </Label>
              <Input onChange={this.handleChange} placeholder='e.g. "6:00 PM"' type="text" name="hoursOfOperationClose" value={this.state.hoursOfOperationClose} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="website">Website: </Label>
              <Input onChange={this.handleChange} placeholder='e.g. "www.mainstvet.com"' type="text" name="website" value={this.state.website} />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </div>

      </div>
    )
  }

}

export default NewVetForm