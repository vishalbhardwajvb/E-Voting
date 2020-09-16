import React from "react"
import Menu from "./Menu"
import ContactUs from "./ContactUs"
import Footer from "./Footer"
import Body from "./Body"
import Services from "./Services"
import Product from "./Product"
import Signin from "../auth/Signin"
import Signup from "../auth/Signup"
import Team from "./Team"

const Base=()=>(
    <>
        <Menu/>
        <Services/>
        <Product/>
        <Body/>
        <Team/>
        <ContactUs/>
        <Footer/>
        {/* <Signin/> */}
        {/* <Signup/> */}
    </>
)


export default Base;