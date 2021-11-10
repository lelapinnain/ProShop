import React from 'react'
import { NavLink } from 'react-router-dom'

import { Container, Nav, Navbar } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <NavLink end to='/'>
            <Navbar.Brand>ProShop</Navbar.Brand>
          </NavLink>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <NavLink end to='/cart' className='nav'>
                <i className='fas fa-shopping-cart'></i> Cart
              </NavLink>

              <NavLink to='/login' className='nav'>
                <i className='fas fa-user'></i>Sign In
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
