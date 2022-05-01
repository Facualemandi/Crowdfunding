import React from 'react'
import '../Styles/Mastercraft.css'
import logoMastercraft from '../Images/logo-mastercraft.svg'
import iconBookmark from '../Images/icon-bookmark.svg'


const Mastercraft = ({isOpen}) => {
  return (

     <>
       <section className='mastercraft_container'>
               <img src={logoMastercraft} alt='Mastercraft' className='logoMastercraft'/>    
               <h1> Mastercraft Bamboo Monitor Riser </h1> 
               <p> A beautiful Handcrafted monitor stand to reduce neck and eye strain </p>
              
              <div className='div_container_mastercraft'>
                <button className='button_one_project' onClick={isOpen} >Back This Project</button>

                <button className='button_two_boomark'>
                    <img src={iconBookmark} alt='Boomark' className='boomark'/>
                     <p> Boomark </p>
                </button>
              </div>

       </section>
     </>
  )
}

export default Mastercraft