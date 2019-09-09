import React, { Component } from 'react';

class PetHeader extends Component {
    render() {
        return (
            <div className="petHeader">
                <img className="petHeaderImgOne" src="/images/dog_navbar.png" />

                <img src="/images/vetrev_logo.png" />

                <img className="petHeaderImgTwo" src="/images/dog_closeup.png" />
            </div>
        );
    }
}

export default PetHeader;