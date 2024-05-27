import React from 'react'
import Checkout from '@/app/components/productsDashboard/productUtilities/checkout/Checkout'

const ProductCheckout = ({params} : {params: {q: string}}) => {
  return (
    <Checkout params={params}/>
  )
}

export default ProductCheckout