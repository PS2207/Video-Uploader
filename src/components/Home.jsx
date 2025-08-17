import React from 'react'
import { Outlet } from 'react-router'
import CustomNavbar from './CustomNavbar'


const home = () => {
  return (
     <>
      <CustomNavbar/>
      <Outlet/>
     </>
  )
}

export default home