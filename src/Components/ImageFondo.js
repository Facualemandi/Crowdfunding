import React from 'react'
import '../Styles/ImageFondo.css'
import fondo from '../Images/image-hero-desktop.jpg'
const ImageFondo = () => {


  return (
    <> 
      <img className='fondo' src={fondo} alt='Fondo'/>
    </>
  )
}

export default ImageFondo