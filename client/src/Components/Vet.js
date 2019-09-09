import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Navbar from './Navbar';
import VetHeader from './VetHeader';
import VetBody from './VetBody';
import Footer from './Footer';

class Vet extends Component {

    render() {
        return (
            <div className="mainDiv">
                <VetHeader/>
                
                <Navbar/>

                <div className="headerDiv">
                <h3 style={{color: "white", fontStyle: "bold"}}>Reviews straight from the horse's mouth!</h3>
                </div>
                
                <VetBody/>
                <Footer/>
            </div >
        );
    }
}

export default Vet;