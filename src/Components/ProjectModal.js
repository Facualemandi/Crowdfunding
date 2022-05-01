import React from 'react'
import '../Styles/ProjectModal.css'
import  closeModal from '../Images/icon-close-modal.svg'

const ProjectModal = ({isCloseM}) => {
  return (
     <>
     <section className='section_frist_modal'>
         <div className='closeModal'>
           <h2> Back this project </h2>
           <img onClick={isCloseM} alt='X' src={closeModal} className='iconCloseModal'/>
         </div>
       <p> Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world? </p>
     </section>
      
     </>
  )
}

export default ProjectModal