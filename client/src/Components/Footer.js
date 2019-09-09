import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <nav class="navbar sticky-bottom navbar-expand-lg navbar-dark mt-5" style={{backgroundImage: `url(${"/images/wood.jpeg"})`}}>
                    <div class="d-flex justify-content-center navbar-collapse" id="navbarNav">
                        <p style={{color: "white"}}> ®2019 VetRev</p>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Footer;