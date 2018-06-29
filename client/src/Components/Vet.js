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
            <div>
                <h1>Veterinarian Companies</h1>

                <h3>Companies:</h3>

                

                <Link to="/vet/new">Add New Veterinarian</Link>


                {this.state.vet.map((vet, index) => {
                        return (
                            <div className="vetParentDiv">
                            <div className="vetDiv" key={index}>
                                <h3>{vet.name}</h3>
                                <div><img className="vetLogo" src={vet.logourl}/></div>
                                <h5>Location: {vet.location}</h5>
                                <h5>Hours of Operation: {`${vet.hoursOfOperationOpen} - ${vet.hoursOfOperationClose}`}</h5>
                                <Link to={`${vet._id}/pet`}> {vet.name}'s Review </Link>
                                <div></div>
                            </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Vet;