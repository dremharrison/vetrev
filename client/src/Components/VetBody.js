import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

class VetBody extends Component {
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
            <div>
                               {
                    this.state.vet.map((vet, index) => {
                        return (
                            <div className="vetParentDiv" key={index}>
                                <div className="vetDiv d-flex align-items-center" >
                                    <div className="vetDivLogo">
                                    <img className="vetLogo" alt="vetLogo" src={vet.logourl} />
                                    <Link className="linkToReview" to={`${vet._id}/pet`}><h4>{vet.name}'s Review</h4></Link>
                                    </div>
                                    <div className="vetDivInfo align-items-center justify-content-center">
                                        <h5> {vet.streetAddress}</h5>
                                        <h5> {vet.cityStateZip}</h5>
                                        <h5> {vet.phoneNumber}</h5>
                                        <h5>{`${vet.hoursOfOperationOpen} - ${vet.hoursOfOperationClose}`}</h5>
                                        <a href={vet.website} target="_blank">{vet.website}</a>
                                    </div>
                                    <div>
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

export default VetBody;