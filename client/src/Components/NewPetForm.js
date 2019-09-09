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
    review: '',
    rating: ''
  }

  componentWillMount() {
    console.log(this.props.props.match.params.vetid)
  }

  handleChange = (event) => {
    const name = event.target.name
    const newState = { ...this.state }
    newState[name] = event.target.value
    this.setState(newState)
    console.log(this.state)
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const payload = {
      name: this.state.name,
      description: this.state.picurl,
      age: this.state.age,
      breed: this.state.breed,
      gender: this.state.gender,
      review: this.state.review,
      picurl: this.state.picurl,
      rating: this.state.rating
    }
    const vetId = this.props.props.match.params.vetid
    console.log(vetId)
    await axios.post(`/api/vet/${vetId}/pet`, payload)
    this.props.toggleNewPetFormButton()
    this.props.getPet()
  }

  render() {
    return (
      <div className="newPetFormDiv">
        <h4>New Pet Review</h4>
        <Form className="border p-4" onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Name: </Label>
            <Input onChange={this.handleChange} placeholder='e.g. "Chester"' type="text" name="name" value={this.state.name} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="picurl">Pet Pic URL: </Label>
            <Input onChange={this.handleChange} placeholder='e.g. "http://www.domain.com/pic"' type="text" name="picurl" value={this.state.picurl} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="age">Age: </Label>
            <Input onChange={this.handleChange} placeholder='e.g. "2 Years Old"' type="text" name="age" value={this.state.age} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="breed">Breed: </Label>
            <Input onChange={this.handleChange} placeholder='e.g. "Boxer"' type="text" name="breed" value={this.state.breed} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="gender">Gender: </Label>
            <Input onChange={this.handleChange} placeholder='e.g. "Male"' type="text" name="gender" value={this.state.gender} />
          </FormGroup>
          <FormGroup>
          <Label htmlFor="review">Rate Your xperience: </Label>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">Rating</label>
              </div>
              <select class="custom-select" id="inputGroupSelect01" name="rating" onChange={this.handleChange}>
                <option selected>Choose...</option>
                <option value="1">&#9733;</option>
                <option value="2">&#9733;&#9733;</option>
                <option value="3">&#9733;&#9733;&#9733;</option>
                <option value="4">&#9733;&#9733;&#9733;&#9733;</option>
                <option value="5">&#9733;&#9733;&#9733;&#9733;&#9733;</option>
              </select>
            </div>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="review">Review: </Label>
            <Input onChange={this.handleChange} placeholder='e.g. "I love this place and Dr. Ramirez!"' type="textarea" name="review" value={this.state.review} />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default NewPetForm