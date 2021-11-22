import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

import { logout } from '../actions/userActions'
const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandeler = () => {
    dispatch(logout())
    navigate('/')
  }

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Nav.Link id='RouterNavLink' as={Link} to='/'>
            <Navbar.Brand>ProShop</Navbar.Brand>
          </Nav.Link>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link id='RouterNavLink' as={Link} to='/cart'>
                <i className='fas fa-shopping-cart'></i> Cart
              </Nav.Link>
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Actions' id='adminMenu' menuVariant='dark'>
                  <NavDropdown.Item>
                    <Nav.Link id='RouterNavLink' as={Link} to='/admin/userlist'>
                      Users
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Nav.Link
                      id='RouterNavLink'
                      as={Link}
                      to='admin/productlist'
                    >
                      Products
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Nav.Link id='RouterNavLink' as={Link} to='admin/orderlist'>
                      Orders
                    </Nav.Link>
                  </NavDropdown.Item>
                </NavDropdown>
              )}
              {userInfo ? (
                <NavDropdown
                  title={userInfo.name}
                  id='nav-dropdown'
                  menuVariant='dark'
                >
                  <NavDropdown.Item>
                    <Nav.Link id='RouterNavLink' as={Link} to='/profile'>
                      Profile
                    </Nav.Link>
                  </NavDropdown.Item>

                  <NavDropdown.Item onClick={logoutHandeler}>
                    Log Out
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav.Link id='RouterNavLink' as={Link} to='/login'>
                  <i className='fas fa-user'></i>Sign In
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
