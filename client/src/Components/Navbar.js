import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark" style={{ backgroundImage: `url(${"/images/wood.jpeg"})` }}>
                    <div class="navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ml-auto mr-auto">
                            <li class="nav-item m-1 font-weight-bold active">
                                <a class="nav-link" href="/">Home</a>
                            </li>
                            <li class="nav-item m-1 font-weight-bold active">
                                <a class="nav-link" href="/vet/new">New Vet</a>
                            </li>
                            <li class="nav-item m-1 font-weight-bold active">
                                <a style={{cursor: "pointer"}} class="nav-link" data-toggle="modal" data-target="#loginModal">Login</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="loginModalLabel">Modal title</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                ...
      </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;