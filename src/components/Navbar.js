import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Switch from 'react-bootstrap/esm/Switch';
import logo from '../logo1.png'
import styled from 'styled-components';
import {ButtonContainer} from "./Button"

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expend-sm navbar-dark px-sm-5">
                <Link to='/'>
                    <img src={logo} alt="store" className="navbar-brand"/>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-2">
                        <Link to="/" className="nav-link">
                            MyDrugs
                        </Link>
                    </li>
                </ul>
                <Link to='/cart' className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                        <i className="fas fa-cart-plus"/>
                        </span>
                        my cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
background:var(--mainBlue);
.nav-link{
    color:var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform: capitalize;
}
`