import React, { Component } from 'react';

class NewVetHeader extends Component {
    render() {
        return (
            <div className="newVetHeader">
                <img className="newVetHeaderImgOne" src="/images/dog_navbar_three.png" />

                <div className="d-flex justify-content-center align-items-center">

                    <div className="headerDivInfo">
                        <h1>New Vet</h1>
                        <h3>Add a new vet, then add a review!</h3>
                    </div>
                </div>
                <img className="newVetHeaderImgTwo" src="/images/cat_navbar_two.png" />
            </div>
        );
    }
}

export default NewVetHeader;