import React, { Component } from 'react';

class NewVetHeader extends Component {
    render() {
        return (
            <div className="newVetHeader">
                <img className="newVetHeaderImgOne" src="/images/dog_navbar_three.png" />

                <img className="newVetHeaderLogo" src="/images/vetrev_logo.png" />

                <img className="newVetHeaderImgTwo" src="/images/cat_navbar_two.png" />
            </div>
        );
    }
}

export default NewVetHeader;