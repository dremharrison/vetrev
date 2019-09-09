import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import NewPetForm from './NewPetForm';
import UpdateVetForm from './UpdateVetForm';
import PetHeader from './PetHeader';
import Navbar from './Navbar';
import Footer from './Footer';

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
        <PetHeader />
        <Navbar/>


        <div class="container-fluid">
          <div class="row">
            <nav class="col-md-2 d-none d-md-block bg-light sidebar">
              <div class="sidebar-sticky">
                <div class="card text-center">
                  <img class="card-img-top" src={vet.logourl} alt="vet logo"></img>
                </div>
                <div class="card text-center mt-5">
                  <div class="card-header">
                    Vet Info
                  </div>
                  <div class="card-body">
                    <p> {vet.streetAddress}</p>
                    <p> {vet.cityStateZip}</p>
                    <p> {vet.phoneNumber}</p>
                    <p>{`${vet.hoursOfOperationOpen} - ${vet.hoursOfOperationClose}`}</p>
                    <a href={vet.website} target="_blank">{vet.website}</a>
                  </div>
                  <div class="card-footer text-muted" >
                  </div>
                </div>
                <div class="card text-center mt-5">
                  <div class="card-body">
                    <h5 class="card-title">Connect! Follow! Add!</h5>
                  </div>
                  <img class="card-img-top" src="/images/social_media_links.png" alt="social media links"></img>
                  <img class="card-img-top" src="/images/mancarryingdog.jpg" alt="man carrying dog"></img>
                  <div class="card-footer text-muted" >

                  </div>
                </div>
              </div>
            </nav>

            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
              <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                <h1 class="h2">{vet.name}</h1>
                <div class="btn-toolbar mb-2 mb-md-0">
                  <div class="btn-group mr-2">
                    <button style={{background: "#d1bc8e", color: "white"}}class="btn btn-sm btn-outline-secondary" onClick={this.toggleNewPetFormButton}>Add Review</button>
                    <button class="btn btn-sm btn-outline-secondary" onClick={this.toggleUpdateVetFormButton}>Update</button>
                    <button class="btn btn-sm btn-outline-secondary" onClick={(e) => { if (window.confirm("Please DO NOT delete this vet without creating a new vet and review first! Thanks!")) this.deleteVet(e) }}>Delete</button>
                  </div>
                </div>
              </div>

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
                let petRating;
                if (pet.rating === "1") {
                  petRating = <h6>Rating: &#9733;&#9734;&#9734;&#9734;&#9734; ({pet.rating})</h6>
                } else if (pet.rating === "2") {
                  petRating = <h6>Rating: &#9733;&#9733;&#9734;&#9734;&#9734; ({pet.rating})</h6>
                } else if (pet.rating === "3") {
                  petRating = <h6>Rating: &#9733;&#9733;&#9733;&#9734;&#9734; ({pet.rating})</h6>
                } else if (pet.rating === "4") {
                  petRating = <h6>Rating: &#9733;&#9733;&#9733;&#9733;&#9734; ({pet.rating})</h6>
                } else if (pet.rating === "5") {
                  petRating = <h6>Rating: &#9733;&#9733;&#9733;&#9733;&#9733; ({pet.rating})</h6>
                } else {
                  petRating = <h6>Rating: "N/A"</h6>
                }

                return (

                  <div className="petReviewParentDiv" key={index}>
                    <div className="petReviewDiv" >
                      <div className="petReviewDivLogo" >
                        <h5>{pet.name}</h5>
                        <img className="petReviewLogo" alt="pet picture" src={pet.picurl}></img>

                      </div>

                      <div className="petReviewDivInfo">
                        {petRating}
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


            </main>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Pet;