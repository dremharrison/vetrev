import React, { Component } from 'react';

class VetHeader extends Component {
    render() {
        return (
            <div>
                <div className="vetHeader">
                    <img className="vetHeaderImgOne" src="/images/dog_navbar_two.png" />

                    <div className="d-flex justify-content-center align-items-center">

                        <div className="headerDivInfo">
                            <h1>VetRev</h1>
                            <h3>Reviews straight from the horses mouth</h3>
                        </div>
                    </div>
                    <img className="vetHeaderImgTwo" src="/images/cat_navbar.png" />
                </div>
            </div>

        );
    }
}

export default VetHeader;