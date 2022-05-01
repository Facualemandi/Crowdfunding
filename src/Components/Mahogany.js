import React from "react";
import '../Styles/Mahogany.css'
const Mahogany = () => {
  return (
    <>
      <div className="mahogany_project">
        <div className="principal_mahogany">
          <h3>Mahogany Edition Stand</h3>
          <span>Pledge $200 or more</span>
        </div>

        <p className="p_mahogany">
          You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
          personal thank you. You’ll be added to our Backer member list.
          Shipping is included.
        </p>

        <div className="div_mahogany_project">
          <span className="span_mahogany">
            0
            <p>left</p>
          </span>

          <div>
            <button className="btn_mahogany">Select Reward</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mahogany;
