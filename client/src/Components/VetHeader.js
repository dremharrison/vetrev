import React, { Component } from 'react';

class VetHeader extends Component {
    render() {
        return (
            <div>
                <div className="vetHeader">
                    <img className="vetHeaderImgOne" src="/images/dog_navbar_two.png" />

                    <img className="vetHeaderLogo" src="/images/vetrev_logo.png" />
            
                    <img className="vetHeaderImgTwo" src="/images/cat_navbar.png" />
                </div>
            </div>

        );
    }
}

export default VetHeader;