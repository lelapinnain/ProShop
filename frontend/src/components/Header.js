import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { logout } from '../actions/userActions'
const Header = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandeler = () => {
    dispatch(logout())
  }

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Link className='nav-link' to='/'>
            <Navbar.Brand>ProShop</Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Link className='nav-link' to='/cart'>
                <i className='fas fa-shopping-cart'></i> Cart
              </Link>

              {userInfo ? (
                <NavDropdown
                  title={userInfo.name}
                  id='nav-dropdown'
                  menuVariant='dark'
                >
                  <NavDropdown.Item>
                    <Link className='nav-link' to='/profile'>
                      Profile
                    </Link>
                  </NavDropdown.Item>

                  <NavDropdown.Item onClick={logoutHandeler}>
                    Log Out
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Link className='nav-link' to='/login'>
                  <i className='fas fa-user'></i>Sign In
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
