import React from "react";
import ReactDom from "react-dom";
import "../Styles/ExitoModal.css";
import checkLogo from "../Images/icon-check.svg";

const Exito = ({isCloseM}) => {
  return ReactDom.createPortal(
    <div className="exitoModalBackground">
      <section className="container_exito_modal">
        <img alt="check" src={checkLogo} />
         <h3> Thanks for your support! </h3>
        <p>
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>
       <button onClick={isCloseM} > Go it! </button>

      </section>
    </div>,
    document.getElementById("exito")
  );
};

export default Exito;
