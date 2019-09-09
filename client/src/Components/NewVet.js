import React, { Component } from 'react'
import NewVetHeader from './NewVetHeader';
import Navbar from './Navbar';
import NewVetForm from './NewVetForm';

class NewVet extends Component {


  render() {
    return (


      <div className="vetFormParentDiv">
        <NewVetHeader />
        <Navbar />
        <div className="newVetHeaderDiv">
          <h3 className="mb-3" style={{ color: "white", fontStyle: "bold" }}>Add a new vet, then add a review!</h3>
        </div>
        <NewVetForm/>

      </div>
    )
  }

}

export default NewVet