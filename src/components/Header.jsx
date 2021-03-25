import React, {} from 'react';
import '../css/Header.css';
import Image from 'react-bootstrap/Image'
import logo from "../img/logo.PNG";

const Header = () => {
    return (<>
    <div class="fixed-header">
        <h1>MyMeds</h1>
        <Image src={logo} />
    </div>
    </>)
}

export default Header;