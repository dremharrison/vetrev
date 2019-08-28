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
        console.log(this.state.vet)
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
                                    <img className="vetLogo" alt="vetLogo" src={vet.logourl} />
                                    <Link className="linkToReview" to={`${vet._id}/pet`}><h4>{vet.name}'s Review</h4></Link>
                                    </div>
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
                        )
                    })
                }
            </div >
        );
    }
}

export default Vet;