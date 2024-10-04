import React from 'react'
import {Navigate} from "react-router-dom"
import ProductDetaiil from "./../pages/ProductDetaiil";

const PrivateRoute = ({authenticate}) => {
  return (
    <div> 
      {authenticate? <ProductDetaiil /> : <Navigate to="/login"/>}
    </div>
  )
}

export default PrivateRoute