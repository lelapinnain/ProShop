import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className='container-fluid justify-content-center'>
      <Nav.Item>
        {step1 ? (
          <Nav.Link>
            <Link className='nav-link' to='/login'>
              Sign In
            </Link>
          </Nav.Link>
        ) : (
          <Nav.Link disabled>
            <Link className='nav-link' to='/login'>
              sign in
            </Link>
          </Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <Nav.Link>
            <Link className='nav-link' to='/shipping'>
              Shipping
            </Link>
          </Nav.Link>
        ) : (
          <Nav.Link disabled>
            <Link className='nav-link' to='/shipping'>
              Shipping
            </Link>
          </Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <Nav.Link>
            <Link className='nav-link' to='/payment'>
              Payment
            </Link>
          </Nav.Link>
        ) : (
          <Nav.Link disabled>
            <Link className='nav-link' to='/payment'>
              Payment
            </Link>
          </Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <Nav.Link>
            <Link className='nav-link' to='/placeorder'>
              Place Order
            </Link>
          </Nav.Link>
        ) : (
          <Nav.Link disabled>
            <Link className='nav-link' to='/placeorder'>
              Place Order
            </Link>
          </Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  )
}

export default CheckoutSteps
