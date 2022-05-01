import React from "react";
import '../Styles/NoReward.css'
const NoReward = () => {
  return (
    <>
    <section className="sectionContainer_noReward">
       <div className="noReward">
         <input type='radio' className="chexbox_noReward"/>
         <h3>Pledge with no reward</h3>
        </div>
        <p>  
          Choose to support us without a reward if you simply believe in our
          project. As a backer, you will be signed up to receive product updates
          via email
        </p>

        <hr className="hrModal"/>
         
         <div className="totalPiedgeNoReward">
             <input type='number' placeholder="Piedge"/>
              <button> Continue </button>
         </div>

     
    </section>
    </>
  );
};

export default NoReward;
