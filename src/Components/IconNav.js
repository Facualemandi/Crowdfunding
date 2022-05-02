import React from 'react'
import '../Styles/IconNav.css'
import iconHamb from '../Images/icon-hamburger.svg'

const IconNav = ({setOpenMenuList, openMenuList}) => {

  const openMenu = () => {
    setOpenMenuList(true)

    if(openMenuList){
      setOpenMenuList(false)
    }
  }

  return (
        <>
          <img className='icon_hamb' alt='Icono Hamburgesa' src={iconHamb} onClick={openMenu}/>
        </>
  )
}

export default IconNav