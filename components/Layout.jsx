import React, { Children } from 'react'
import { Header, Footer } from './'
import { Facebook1 } from '../components/Facebook1';

const Layout = ({children}) => {
  return (
   <>
    <Header />
        {children}
      <Facebook1 /> 
    <Footer /> 
   </>
  )
}

export default Layout