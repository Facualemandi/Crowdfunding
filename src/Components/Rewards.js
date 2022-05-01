import React from 'react'
import '../Styles/Rewards.css'
const Rewards = ({totalItems}) => {
  return (
     <>
       <section>
         {totalItems.map(item => (
             <div className='rewardsTotal'>
                 <div className='containerTop'>
                   <h2>{item.name}</h2>
                   <p className='price_reward'>{item.price}</p>
                   <span className='span_reward'>
                       <p> {item.number}</p>
                       <p>{item.left}</p>
                   </span>
                 </div>

                 <div>
                     <p>{item.text}</p>
                 </div>


             </div>
         ))}
       </section>
       
     </>
  )
}

export default Rewards