import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import NewPetForm from './NewPetForm';
import UpdateVetForm from './UpdateVetForm';

class Pet extends Component {
  state = {
    pet: [],
    editVet: false,
    newPetForm: false
  }

  deleteVet = () => {

    const vetId = this.props.match.params.vetid
    console.log(this.props.match.params)
    axios.delete(`/api/vet/${vetId}`).then((res) => {
      this.getVet({ vetId })
    })
    this.props.history.push("/")
  }
  getVet = () => {
    const vetId = this.props.match.params.vetid
    axios.get(`/api/vet/${vetId}`).then(response => {
      const vet = response.data
      this.setState({ vet })
    })

  }

  getPet = () => {
    const vetId = this.props.match.params.vetid
    axios.get(`/api/vet/${vetId}/pet`).then(response => {
      const pet = response.data.pets
      this.setState({ pet })
    })

  }

  componentWillMount() {
    console.log(this.props)
    this.getPet()
    this.getVet()
  }



  toggleNewPetFormButton = () => {
    const canEdit = !this.state.newPetForm
    this.setState({ newPetForm: canEdit })
  }

  toggleUpdateVetFormButton = () => {
    const canEdit = !this.state.editVet
    this.setState({ editVet: canEdit })
  }

  render() {
    const vet = this.state.vet || {}
    const petReversed  = this.state.pet.reverse()
    return (
      <div>

        <h1>Pet Review</h1>
        <Link to="/"><button className="backToVetsButton">Back to Vets</button></Link>
        <div className="vetParentDiv">
          <div className="vetDiv">
            <div className="vetDivLogo"><h2>{vet.name}</h2><img className="vetLogo" alt="vetLogo" src={vet.logourl} /></div>
            <div className="vetDivInfo">
              <h5> {vet.streetAddress}</h5>
              <h5> {vet.cityStateZip}</h5>
              <h5> {vet.phoneNumber}</h5>
              <h5>Hours of Operation: {`${vet.hoursOfOperationOpen} - ${vet.hoursOfOperationClose}`}</h5>
              <a href={vet.website} target="_blank">{vet.website}</a>
            </div>
            <div>
            </div>
          </div>
        </div>

        <button className="newReviewButton" onClick={this.toggleNewPetFormButton} >New Review</button>
        <button className="petDeleteButton" onClick={(e) => {if (window.confirm("Are you sure you would like to delete this vet? This CAN'T be undone!")) this.deleteVet(e)}}>Delete Vet</button>
        <button className="petUpdateButton" onClick={this.toggleUpdateVetFormButton}>Update Vet</button>


        {this.state.newPetForm ? 
        <NewPetForm 
        toggleNewPetFormButton={this.toggleNewPetFormButton.bind(this)} 
        getPet={this.getPet.bind(this)}
        props={this.props} /> 
        : null}


        {this.state.editVet ? 
        <UpdateVetForm 
        toggleUpdateVetFormButton={this.toggleUpdateVetFormButton.bind(this)} 
        props={this.props}/> 
        : null}

        {console.log(petReversed)}

        {this.state.pet.slice(0).map((pet, index) => {

          return (
            <div className="petParentDiv" key={index}>
              <div className="petDiv" >
                <div className="petDivLogo" >
                  <h5>{pet.name}</h5>
                  <img className="petLogo" alt="pet" src={pet.picurl}></img>        
                
                </div>
                
                <div className="petDivInfo">
                  <h6>Age: {pet.age}</h6>
                  <h6>Breed: {pet.breed}</h6>
                  <h6>Gender: {pet.gender}</h6>
                  <h6>Review: {pet.review}</h6>
          {/* {console.log(pet._id)} */}
                </div>
                
              </div> 
              
            </div>
          )
        })
        }
      </div>
    );
  }
}

export default Pet;