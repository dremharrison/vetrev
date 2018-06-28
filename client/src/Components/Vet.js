import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Vet extends Component {
    state = {
        vet: []
    }

    // async componentWillMount() {
    //     const response = await axios.get('/api/vet')
    //     const vet = response.data
    //     this.setState({ vet })
    // }

    render() {
        return (
            <div>
                <h1>Veterinarian Companies</h1>

                <h3>Companies:</h3>
                <div>
                    <a href="/vet/new">Add New Veterinarian</a>
                </div>

                {/* {
                    this.state.vet.map((pet, index) => {
                        return (
                            <div key={index}>
                                <div>{this.props.logourl}</div>
                                <div>Location: {this.props.location}</div>
                                <div>Member Since: {this.props.memberSince}</div>
                                <div>Hours of Operation: {`${vet.hoursOfOperationOpen} - ${vet.hoursOfOperationClose}`}</div>

                                <Link to={`/vet/${pet._id}`}> {pet.name}'s Review </Link>
                            </div>
                        )
                    })
                } */}
            </div>
        );
    }
}

export default Vet;