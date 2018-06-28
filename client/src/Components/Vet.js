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
                            <div key={index}>
                                <div>{vet.name}</div>
                                <div>{vet.logourl}</div>
                                <div>Location: {vet.location}</div>
                                {/* <div>Member Since: {this.props.memberSince}</div> */}
                                <div>Hours of Operation: {`${vet.hoursOfOperationOpen} - ${vet.hoursOfOperationClose}`}</div>
                                <Link to={`${vet._id}/pet`}> {vet.name}'s Review </Link>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Vet;