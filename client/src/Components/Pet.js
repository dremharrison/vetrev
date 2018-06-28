import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Pet extends Component {
  render() {
    return (
      <div>
        <h1>Pet Review</h1>

        <div>{this.props.logourl}</div>
        <div>Name: {this.props.userName}</div>
        <div>Age: {this.props.age}</div>
        <div>Breed: {this.props.breed}</div>
        <div>Gender: {this.props.gender}</div>
        
        <Link to="/">Back to Vets</Link>

      </div>
    )
  }
}


export default Pet