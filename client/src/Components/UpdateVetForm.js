import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class UpdateVetForm extends Component {

    state = {
        vet: {}
    }

    handleUpdate = (event) => {
        const copyOfState = { ...this.state.vet }
        const attributeName = event.target.name
        const attributeValue = event.target.value
        copyOfState[attributeName] = attributeValue
    
        this.setState({ vet: copyOfState })
      }
    
      submitUpdate = (event) => {
        event.preventDefault()
        const updatedVet = this.state.vet
        const vetId = this.props.props.match.params.vetid
        axios.put(`/api/vet/${vetId}`, updatedVet).then(() => {
          window.location.reload()
        })
        this.props.toggleUpdateVetFormButton()
      }

    render() {
        return (
            <div className = "updateVetFormDiv">
                <Form onSubmit={this.submitUpdate}>
                    <h4>Update Vet</h4>
                    <FormGroup>
                        <Label htmlFor="name">Name: </Label>
                        <Input onChange={this.handleUpdate} type="text" name="name" value={this.state.name} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="logourl">Logo URL: </Label>
                        <Input onChange={this.handleUpdate} type="text" name="logourl" value={this.state.logourl} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="streetAddress">Street Address: </Label>
                        <Input onChange={this.handleUpdate} type="text" name="streetAddress" value={this.state.streetAddress} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="cityStateZip">City, State Zip: </Label>
                        <Input onChange={this.handleUpdate} type="text" name="cityStateZip" value={this.state.cityStateZip} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="phoneNumber">Phone Number: </Label>
                        <Input onChange={this.handleUpdate} type="text" name="phoneNumber" value={this.state.phoneNumber} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="hoursOfOperationOpen">Hours of Operation Open: </Label>
                        <Input onChange={this.handleUpdate} type="text" name="hoursOfOperationOpen" value={this.state.hoursOfOperationOpen} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="hoursOfOperationClose">Hours of Operation Close: </Label>
                        <Input onChange={this.handleUpdate} type="text" name="hoursOfOperationClose" value={this.state.hoursOfOperationClose} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="website">Website: </Label>
                        <Input onChange={this.handleUpdate} type="text" name="website" value={this.state.website} />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            
            </div>
        );
    }
}

export default UpdateVetForm;




