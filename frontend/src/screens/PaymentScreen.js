import React, { useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import CheckoutSteps from '../components/CheckoutSteps'
import { savePaymentMethod } from '../actions/cartActions'
import FormContainer from '../components/FormContainer'

const PaymentScreen = () => {
  const history = useNavigate()
  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  if (!shippingAddress) {
    history('/shipping')
  }

  const [paymentMethod, setPaymentMethod] = useState('PayPal')

  const submintHandeler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    history('/placeorder')
    //console.log('hi')
  }

  return (
    <>
      <CheckoutSteps step1 step2 step3 />
      <FormContainer>
        <h1>Payment Method</h1>
        <Form onSubmit={submintHandeler}>
          <Form.Group>
            <Form.Label as='legend'>Select Method</Form.Label>
            <Col>
              <Form.Check
                type='radio'
                label='PayPal or Cridet Card'
                id='PayPal'
                name='paymentMethod'
                value='PayPal'
                onChange={(e) => {
                  console.log('PayPal')
                  setPaymentMethod(e.target.value)
                }}
              ></Form.Check>

              <Form.Check
                type='radio'
                label='Stripe'
                id='Stripe'
                name='paymentMethod'
                value='Stripe'
                onChange={(e) => {
                  console.log('Stripe')
                  setPaymentMethod(e.target.value)
                }}
              ></Form.Check>
            </Col>
          </Form.Group>
          <Button
            type='submit'
            variant='primary'
            style={{ marginTop: '0.5rem' }}
          >
            Continue
          </Button>
        </Form>
      </FormContainer>
    </>
  )
}

export default PaymentScreen
