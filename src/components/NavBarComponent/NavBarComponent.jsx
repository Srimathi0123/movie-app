import React from 'react'
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import HomeComponent from '../routes/HomeComponent/HomeComponent'
import AboutComponent from '../routes/AboutComponent/AboutComponent'
import ContactComponent from '../routes/ContactComponent/ContactComponent'
import CounterComponent from '../CounterComponent/CounterComponent'


const NavBarComponent = () => {
  return (
   < React.Fragment>
   <HomeComponent/>
   <CounterComponent/>
   
   </React.Fragment>
    
  )
}

export default NavBarComponent