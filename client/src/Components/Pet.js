import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Pet extends Component {
  state = {
    pet: [],
    vet: {},
    editVet: false
  }
  deleteVet = () => {

    const vetId = this.props.match.params.vetid
    console.log(this.props.match.params)
    axios.delete(`/api/vet/${vetId}`).then((res) => {
      this.getVet({ vetId })
    })

  }
  getVet = () => {
    const vetId = this.props.match.params.vetid
    const response = axios.get(`/api/vet/${vetId}`).then(response => {
      const vet = response.data
      this.setState({ vet })
    })

  }

  getPet = () => {
    // const petId = this.props.match.params.petid
    const vetId = this.props.match.params.vetid
    const response = axios.get(`/api/vet/${vetId}/pet`).then(response => {
      const pet = response.data.pets
      this.setState({ pet })
    })

  }

  componentWillMount() {
    console.log(this.props)
    this.getPet()
    this.getVet()
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
    const vetId = this.props.match.params.vetId
    console.log(updatedVet)
    axios.put(`/api/vet/${vetId}`, updatedVet).then(() => {
      window.location.reload()
    })
  }

  toggleButton = () => {
    const canEdit = !this.state.editVet
    this.setState({ editVet: canEdit })
  }

  render() {
    
    const updateForm = (<form className="newVetForm" onSubmit={this.submitUpdate}>

          <div>
            <label htmlFor="name">Name: </label>
            <input onChange={this.handleUpdate} type="text" name="name" value={this.state.name} />
          </div>
          <div>
            <label htmlFor="logourl">Logo URL: </label>
            <input onChange={this.handleUpdate} type="text" name="logourl" value={this.state.logourl} />
          </div>
          <div>
            <label htmlFor="streetAddress">Street Address: </label>
            <input onChange={this.handleUpdate} type="text" name="streetAddress" value={this.state.streetAddress} />
          </div>
          <div>
            <label htmlFor="cityStateZip">City, State Zip: </label>
            <input onChange={this.handleUpdate} type="text" name="cityStateZip" value={this.state.cityStateZip} />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number: </label>
            <input onChange={this.handleUpdate} type="text" name="phoneNumber" value={this.state.phoneNumber} />
          </div>
          <div>
            <label htmlFor="hoursOfOperationOpen">Hours of Operation Open: </label>
            <input onChange={this.handleUpdate} type="text" name="hoursOfOperationOpen" value={this.state.hoursOfOperationOpen} />
          </div>
          <div>
            <label htmlFor="hoursOfOperationClose">Hours of Operation Close: </label>
            <input onChange={this.handleUpdate} type="text" name="hoursOfOperationClose" value={this.state.hoursOfOperationClose} />
          </div>
          <div>
            <label htmlFor="website">Website: </label>
            <input onChange={this.handleUpdate} type="text" name="website" value={this.state.website} />
          </div>
          <input type="submit" value="Update"/>
        </form>)

    const vet = this.state.vet || {}
    return (
      <div>

        <h1>Pet Review</h1>
        <Link to="/"><button className="backToVetsButton">Back to Vets</button></Link>
        <div className="vetParentDiv">
          <div className="vetDiv">
            <div className="vetDivLogo"><h2>{vet.name}</h2><img className="vetLogo" src={vet.logourl} /></div>
            <div className="vetDivInfo">
              <h4> {vet.streetAddress}</h4>
              <h4> {vet.cityStateZip}</h4>
              <h4> {vet.phoneNumber}</h4>
              <h4>Hours of Operation: {`${vet.hoursOfOperationOpen} - ${vet.hoursOfOperationClose}`}</h4>
              <h4> {vet.website}</h4>
            </div>
            <div>
            </div>
          </div>
        </div>

        <Link to={`./pet/new`}><button className="newReviewButton"  >New Review</button></Link>
        <button className="petDeleteButton" onClick={this.deleteVet}>Delete Vet</button>
        <button className="petUpdateButton" onClick={this.toggleButton}>Update Vet</button>

        

        {console.log(this.state.pet)}

        {this.state.pet.map((pet, index) => {

          return (
            <div className="petParentDiv">
              <div className="petDiv" key={index}>
                <div className="petDivLogo">
                  <h4>{pet.name}</h4>
                  <img className="petLogo" src={pet.picurl}></img>
                </div>
                <div className="petDivInfo">
                  <h5>Age: {pet.age}</h5>
                  <h5>Breed: {pet.breed}</h5>
                  <h5>Gender: {pet.gender}</h5>
                  <h5>Review: {pet.review}</h5>
                </div>
              </div>
            </div>

        
          )
        })
        }
        {this.state.editVet ? updateForm : null}
      </div>
    );
  }
}

export default Pet;