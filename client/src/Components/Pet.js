import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Pet extends Component {
  state = {
    pet: [],
    vet: {}
  }
  deleteVet = () => {
    const vetId = this.props.match.params.id
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

  render() {
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

        <Link to={`${vet._id}/pet/new`}><button className="newReviewButton"  >New Review</button></Link>        
        <button className="petDeleteButton"  onClick={this.deleteVet}>Delete Vet</button>
        <button className="petUpdateButton"  onClick={this.deleteVet}>Update Vet</button>


        {console.log(this.state.pet)}

        {this.state.pet.map((pet, index) => {

          return (
            <div className="petParentDiv">
              <div className="petDiv" key={index}>
                <div className="petDivLogo">
                  <h4>{pet.name}</h4>
                  <img className="petLogo" src={pet.logourl}></img>
                </div>
                <div className="petDivInfo">
                  <h5>Age: {pet.age}</h5>
                  <h5>Breed: {pet.breed}</h5>
                  <h5>Gender: {pet.gender}</h5>
                  <h5>Rating: {pet.starRating}</h5>
                  <h5>Review: {pet.review}</h5>
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