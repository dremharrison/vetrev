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
                        <h3>Reviews from your local Vet straight from the horses mouth!</h3>
                    </div>

                </div>


                <Link className="link" to="/vet/new">Add New Veterinarian</Link>


                {
                    this.state.vet.map((vet, index) => {
                        return (
                            <div className="vetParentDiv">
                                <div className="vetDiv" key={index}>
                                    <div className="vetDivLogo"><h2>{vet.name}</h2><img className="vetLogo" src={vet.logourl} /></div>
                                    <div className="vetDivInfo">
                                        <h4> {vet.streetAddress}</h4>
                                        <h4> {vet.cityStateZip}</h4>
                                        <h4> {vet.phoneNumber}</h4>
                                        <h4>Hours of Operation: {`${vet.hoursOfOperationOpen} - ${vet.hoursOfOperationClose}`}</h4>
                                        <h4> {vet.website}</h4>
                                        <Link to={` ${vet._id}/pet`}>{vet.name}'s Review </Link>
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