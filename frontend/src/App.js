import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import OrderListScreen from './screens/OrderListScreen'
const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/shipping' element={<ShippingScreen />}></Route>
            <Route path='/payment' element={<PaymentScreen />}></Route>
            <Route path='/placeorder' element={<PlaceOrderScreen />}></Route>
            <Route path='/order/:id' element={<OrderScreen />}></Route>

            <Route path='/login' element={<LoginScreen />} exact></Route>
            <Route path='/register' element={<RegisterScreen />} exact></Route>
            <Route path='/profile' element={<ProfileScreen />} exact></Route>

            <Route
              path='/admin/userList'
              element={<UserListScreen />}
              exact
            ></Route>
            <Route
              path='/admin/user/:id/edit'
              element={<UserEditScreen />}
              exact
            ></Route>

            <Route
              path='/admin/productlist'
              element={<ProductListScreen />}
              exact
            ></Route>
            <Route
              path='/admin/orderList'
              element={<OrderListScreen />}
              exact
            ></Route>
            <Route
              path='/admin/product/:id/edit'
              element={<ProductEditScreen />}
              exact
            ></Route>

            <Route
              path='/product/:id'
              element={<ProductScreen />}
              exact
            ></Route>

            <Route path='/cart'>
              <Route path=':id' element={<CartScreen />} />
              <Route path='' element={<CartScreen />} />
            </Route>

            <Route path='/' element={<HomeScreen />} exact></Route>
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
