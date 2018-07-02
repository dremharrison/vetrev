import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Vet extends Component {
    state = {
        vet: []
    }



    async componentWillMount() {
        const response = await axios.get('/api/vet')
        const vet = response.data
        this.setState({ vet })
    }



    render() {
        return (
            <div className="mainDiv">
                <div className="headerDiv">
                    <div className="headerDivInfo">

                        <h1>VetRev</h1>
                        <h3>Reviews from your local Veterinarian straight from the horses mouth</h3>
                    </div>

                </div>
                <Link to="/vet/new">
                    <button className="link">Add New Veterinarian</button>
                </Link>


                {
                    this.state.vet.map((vet, index) => {
                        return (
                            <div className="vetParentDiv" key={index}>
                                <div className="vetDiv" >
                                    <div className="vetDivLogo">
                                    <h2>{vet.name}</h2>
                                    <img className="vetLogo" alt="vetLogo" src={vet.logourl} />
                                    </div>
                                    <div className="vetDivInfo">
                                        <h4> {vet.streetAddress}</h4>
                                        <h4> {vet.cityStateZip}</h4>
                                        <h4> {vet.phoneNumber}</h4>
                                        <h4>Hours of Operation: {`${vet.hoursOfOperationOpen} - ${vet.hoursOfOperationClose}`}</h4>
                                        <h4> {vet.website}</h4>
                                        <Link className="linkToReview" to={`${vet._id}/pet`}>{vet.name}'s Review </Link>
                                    </div>
                                    <div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div >
        );
    }
}

export default Vet;