import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

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
        <h1>New Veterinarian</h1>

        <Link to="/"><button className="backToVetsButton">Back to Vets</button></Link>

        <div className="vetFormChildDiv">
          <p className="newVetFormInfo">Eiusmod nisi elit proident officia labore laboris nulla. Sint anim aliquip eiusmod eiusmod ut aliqua pariatur. Consectetur amet laboris eiusmod labore aute cupidatat. Mollit velit proident adipisicing ullamco enim velit velit. Consectetur quis sint qui dolor anim ad nisi adipisicing velit esse laborum. Elit occaecat aute Lorem officia proident mollit est. Nulla in non exercitation Lorem anim.</p>
          <img className="newVetFormImg" alt="vet form" src="/images/mancarryingdog.jpg" />
        </div>
        <Form className = "newVetFormDiv" onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Name: </Label>
              <Input onChange={this.handleChange} type="text" name="name" value={this.state.name} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="logourl">Logo URL: </Label>
              <Input onChange={this.handleChange} type="text" name="logourl" value={this.state.logourl} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="streetAddress">Street Address: </Label>
              <Input onChange={this.handleChange} type="text" name="streetAddress" value={this.state.streetAddress} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="cityStateZip">City, State Zip: </Label>
              <Input onChange={this.handleChange} type="text" name="cityStateZip" value={this.state.cityStateZip} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="phoneNumber">Phone Number: </Label>
              <Input onChange={this.handleChange} type="text" name="phoneNumber" value={this.state.phoneNumber} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="hoursOfOperationOpen">Hours of Operation Open: </Label>
              <Input onChange={this.handleChange} type="text" name="hoursOfOperationOpen" value={this.state.hoursOfOperationOpen} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="hoursOfOperationClose">Hours of Operation Close: </Label>
              <Input onChange={this.handleChange} type="text" name="hoursOfOperationClose" value={this.state.hoursOfOperationClose} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="website">Website: </Label>
              <Input onChange={this.handleChange} type="text" name="website" value={this.state.website} />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
      </div>
    )
  }

}

export default NewVetForm