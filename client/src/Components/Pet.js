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
    const petReversed = this.state.pet.reverse()
    return (
      <div>
        <div className="petHeader">
          <img className="petHeaderImgOne" src={vet.logourl} />

          <div className="d-flex justify-content-center align-items-end mb-2">

            <div className="petHeaderDivInfo">
              <h1>{vet.name}This</h1>
              <h5> {vet.streetAddress}Street</h5>
              <h5> {vet.cityStateZip}Zip</h5>
              <a href={vet.website} target="_blank">{vet.website}http</a>
            </div>
            <button className="petVetDeleteButton" onClick={(e) => { if (window.confirm("Are you sure you would like to delete this vet? This CAN'T be undone!")) this.deleteVet(e) }}>Delete Vet</button>
            <button className="petVetUpdateButton" onClick={this.toggleUpdateVetFormButton}>Update Vet</button>
          </div>
        </div>

        <nav class="navbar navbar-expand-lg navbar-dark mb-5" style={{ backgroundColor: "gray" }}>
          <div class="d-flex justify-content-center navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/vet/new">New Vet</a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" style={{ color: "orange", cursor: "pointer" }} onClick={this.toggleNewPetFormButton}>New Review</a>
              </li>
            </ul>
          </div>
        </nav>

        {this.state.newPetForm ?
          <NewPetForm
            toggleNewPetFormButton={this.toggleNewPetFormButton.bind(this)}
            getPet={this.getPet.bind(this)}
            props={this.props} />
          : null}


        {this.state.editVet ?
          <UpdateVetForm
            toggleUpdateVetFormButton={this.toggleUpdateVetFormButton.bind(this)}
            props={this.props} />
          : null}


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