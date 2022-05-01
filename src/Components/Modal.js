import React from "react";
import ReactDom from 'react-dom'
import '../Styles/Modal.css'
import NoReward from "./NoReward";
import ProjectModal from "./ProjectModal";



const Modal = ({isCloseM, exitoMod, onValue, setOnValue, error}) => {
      
      return ReactDom.createPortal(
            <div className="modalBackground">
                  <div className="container_modal">
                     <ProjectModal isCloseM={isCloseM}/>
                     <NoReward exitoMod={exitoMod} onValue={onValue} setOnValue={setOnValue}/>
                  </div>
            </div>,
            document.getElementById('modal')
      )
};

export default Modal;


