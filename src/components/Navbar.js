import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import {ButtonContainer} from './ButtonContainer';

class Navbar extends Component {
    render() {
        return (
            <NavWrapper className='navbar navbar-expand-sm bg-primary navbar-dark px-sm-5'>
                <Link to="/"> {/* this is how you creat link (in this case to home page) */}
                    <img src={logo} alt="store" className="navbar-brand"/>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5"></li>
                    <Link to='/' className='nav-link'>
                        products
                    </Link>
                </ul>
                <Link to='/cart' className='ml-auto'>
                <ButtonContainer>
                    <span className="mr-2">
                        <i className="fas fa-cart-plus" />
                    </span>                    
                    my cart
                </ButtonContainer>
                </Link>
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`

`

export default Navbar;