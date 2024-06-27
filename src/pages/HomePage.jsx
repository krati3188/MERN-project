//import React from 'react'
import Navbar from "../component/Navbar"
import Slides from "../component/Slides"
import Categories from "../component/Categories"
import Listings from "../component/Listings"
const HomePage = () => {
  return (
    <>
    <Navbar></Navbar>
    <Slides/>
     <Categories/>
     <Listings/>
    </>
  )
}

export default HomePage