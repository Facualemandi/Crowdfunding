import React from "react";
import "../Styles/Backed.css";

const Backed = () => {
  return (
    <>
      <section className="section_backed">

    <div className="divs_containers">
         <div className="div1">
             <span> $74,852 </span>
             <p>of $100,000 backed</p>
         </div>

          <hr />

            <div className="div2">
              <span> 4,815 </span>
              <p>total backers</p>
            </div>

          <hr />

            <div className="div3">
              <span>64</span>
              <p>days left</p>
            </div>
        </div>

        <div className="div4">
          <div></div>
        </div>
      </section>
    </>
  );
};

export default Backed;
