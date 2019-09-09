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
                <div class="container-fluid">
                    <div class="row">
                        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
                            <div class="sidebar-sticky">
                                <div class="card text-center mt-5">
                                    <div class="card-header">
                                        Subscribe
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Stay in Touch</h5>
                                        <p class="card-text">Subscribe to our newsletter so we can spam you with special events and deals!</p>
                                        <input class="form-control mb-2 mr-sm-2" type="search" placeholder="email" aria-label="Search" />
                                        <a href="#" class="btn btn-secondary">Subscribe</a>
                                    </div>
                                    <div class="card-footer text-muted" >

                                    </div>
                                </div>
                                <div class="card text-center mt-5">
                                    <img class="card-img-top" src="/images/chewy_ad.jpg" alt="chewy ad"></img>
                                    <div class="card-body">
                                        <h5 class="card-title">DEALS!!!</h5>
                                        <p class="card-text">25% off with the vetrev25 discout code!</p>
                                        <a href="https://www.chewy.com">www.chwey.com</a>
                                    </div>
                                    <div class="card-footer text-muted" >
                                        AD
                                    </div>
                                </div>
                                <div class="card text-center mt-5">
                                    <div class="card-body">
                                        <h5 class="card-title">Connect! Follow! Add!</h5>
                                    </div>
                                    <img class="card-img-top" src="/images/social_media_links.png" alt="social media links"></img>
                                    <img class="card-img-top" src="/images/cat_on_back.png" alt="cat on back"></img>
                                    <div class="card-footer text-muted" >

                                    </div>
                                </div>
                            </div>
                        </nav>

                        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                                <h1 class="h2">Veterinarians</h1>
                                <div class="btn-toolbar mb-2 mb-md-0">

                                    <form class="form-inline my-2 my-lg-0">
                                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                        <button class="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
                                    </form>
                                </div>
                            </div>

                            {
                                this.state.vet.map((vet, index) => {
                                    return (
                                        <div className="vetParentDiv" key={index}>
                                            <div className="vetDiv d-flex align-items-center" >
                                                <div className="vetDivLogo">
                                                    <img className="vetLogo" alt="vetLogo" src={vet.logourl} />
                                                    <button type="button" class="btn btn-secondary"><a className="linkToReview" style={{color:"white", textDecoration: "none"}} href={`${vet._id}/pet`}>{vet.name}'s Review</a></button>
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

                        </main>
                    </div>
                </div>
        );
    }
}

export default VetBody;