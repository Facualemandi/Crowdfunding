import React from 'react'
import '../Styles/ItemsProject.css'

const ItemsProject = ({name, price, text, number, left, valueBtn}) => {
  return (
      <>
          <div className='totalItems_project'>
              <div className='principal_items'>
                <h3>{name}</h3>
                <span>{price}</span>
              </div>

              <p className='p_items'>{text}</p>

              <div className='div_bottom_project'>
        
                   <span className='span_left'>
                       {number}
                       <p>{left}</p>
                   </span>
        

                  <div>
                      <button className='btn_reward'>{valueBtn}</button>
                  </div>
              </div>

          </div>
 
          
      </>
  )
}

export default ItemsProject