import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class NewPetForm extends Component {
  state = {
    name: '',
    picurl: '',
    age: '',
    breed: '',
    gender: '',
    review: ''
  }

  componentWillMount(){
    console.log(this.props)
    console.log(this.props.props.match.params.vetid)
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
      description: this.state.picurl,
      age: this.state.age,
      breed: this.state.breed,
      gender: this.state.gender,
      review: this.state.review
    }
    const vetId = this.props.props.match.params.vetid
    console.log(vetId)
    await axios.post(`/api/vet/${vetId}/pet`, payload)
    // await this.props.getAllPet()
  }

  render () {
    return (
      <div className = "newPetFormDiv">
        <h4>New Pet Review</h4>
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Name: </Label>
          <Input onChange={this.handleChange} type="text" name="name" value={this.state.name}/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="picurl">Pet Pic URL: </Label>
          <Input onChange={this.handleChange} type="text" name="picurl" value={this.state.picurl}/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="age">Age: </Label>
          <Input onChange={this.handleChange} type="text" name="age" value={this.state.age}/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="breed">Breed: </Label>
          <Input onChange={this.handleChange} type="text" name="breed" value={this.state.breed}/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="gender">Gender: </Label>
          <Input onChange={this.handleChange} type="text" name="gender" value={this.state.gender}/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="review">Review: </Label>
          <Input onChange={this.handleChange} type="text" name="review" value={this.state.review}/>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
      </div>
    )
  }
}

export default NewPetForm