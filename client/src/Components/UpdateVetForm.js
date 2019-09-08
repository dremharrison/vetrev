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
                <Form className="border p-5" onSubmit={this.submitUpdate}>
                    <h4>Update Vet</h4>
                    <small id="updateHelp" className="form-text text-muted mb-4">*Only input what needs to be updated. Other info for the Vet will automatically stay the same.</small>
                    <FormGroup>
                        <Label htmlFor="name">Name: </Label>
                        <Input onChange={this.handleUpdate} placeholder='e.g. "Main St. Vet"' type="text" name="name" value={this.state.name} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="logourl">Logo URL: </Label>
                        <Input onChange={this.handleUpdate} placeholder='e.g. "http://www.domain.com/pic"' type="text" name="logourl" value={this.state.logourl} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="streetAddress">Street Address: </Label>
                        <Input onChange={this.handleUpdate} placeholder='e.g. "123 Main St."' type="text" name="streetAddress" value={this.state.streetAddress} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="cityStateZip">City, State Zip: </Label>
                        <Input onChange={this.handleUpdate} placeholder='e.g. "Atlanta, GA 30309"' type="text" name="cityStateZip" value={this.state.cityStateZip} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="phoneNumber">Phone Number: </Label>
                        <Input onChange={this.handleUpdate} placeholder='e.g. "404-555-5555"' type="text" name="phoneNumber" value={this.state.phoneNumber} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="hoursOfOperationOpen">Hours of Operation Open: </Label>
                        <Input onChange={this.handleUpdate} placeholder='e.g. "8:00 AM"' type="text" name="hoursOfOperationOpen" value={this.state.hoursOfOperationOpen} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="hoursOfOperationClose">Hours of Operation Close: </Label>
                        <Input onChange={this.handleUpdate} placeholder='e.g. "6:00 PM"' type="text" name="hoursOfOperationClose" value={this.state.hoursOfOperationClose} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="website">Website: </Label>
                        <Input onChange={this.handleUpdate} placeholder='e.g. "www.mainstvet.com"' type="text" name="website" value={this.state.website} />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            
            </div>
        );
    }
}

export default UpdateVetForm;




