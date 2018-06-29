import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

// class Comment extends Component {
//     state = {
//         comment: []
//     }

//     async componentWillMount() {
//         const response = await axios.get('/api/vet/${vetId}/pet/${petId}/comment')
//         const vet = response.data
//         this.setState({ comment })
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Comment</h1>

//                 <Link to="/vet/pet">Add New Veterinarian</Link>


//                 {this.state.vet.map((vet, index) => {
//                         return (
//                             <div className="commentDiv" key={index}>
//                                 <h3>{comment.subject}</h3>
//                                 <h5>{comment.date}</h5>
//                                 <p>{comment.body}</p>
//                                 <h6>{comment.user}</h6>
//                                 <div></div>
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         );
//     }
// }

export default Comment;