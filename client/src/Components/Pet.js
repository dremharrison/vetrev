import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Pet extends Component {
  render() {
    return (
      <div>
        <h1>Pet Review</h1>

        <div>Username: {this.props.userName}</div>
        <div>Member Since: {this.props.memberSince}</div>
        <Link to="/">Back to Vets</Link>

      </div>
    )
  }
}

name: String,
logourl: String,
age: Number,
breed: String,
gender: String,
comments:[commentSchema]

export default UserProfile