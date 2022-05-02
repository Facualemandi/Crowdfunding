import React from 'react'
import logo from '../Images/logo.svg'
import '../Styles/Nav.css'
import IconNav from './IconNav'
import NavUl from './NavUl'


const Nav = ({openMenuList, setOpenMenuList}) => {
  return (
    <>
     <header className='header_container'>
         <nav className='nav_container'>
             <img alt='crowdfund' src={logo} className='crowdfund'/>
               <NavUl openMenuList={openMenuList}/>
               <IconNav setOpenMenuList={setOpenMenuList} openMenuList={openMenuList}/>
         </nav>
     </header>
      
    </>
  )
}

export default Nav