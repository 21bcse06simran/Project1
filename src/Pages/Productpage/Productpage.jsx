import React from 'react'
import ProductDetail from '../../Components/ProductDetail/ProductDetail'
import Signup from '../../Components/Signup/Signup'
import Connect from '../../Components/Connect/Connect'
import Navbar from '../../Components/Navbar/Navbar'

function Productpage() {
  return (
    <div>
        <Navbar/>
        <ProductDetail/>
        <Signup/>
        <Connect/>

    </div>
  )
}

export default Productpage