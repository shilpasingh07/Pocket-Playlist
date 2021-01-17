import React from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';

function Nav(){
    return(
        <Navbar>
        <div className="container">
        <NavbarBrand className="navbar">Pocket Playlist</NavbarBrand>
        </div>
        </Navbar>
    );
}

export default Nav;