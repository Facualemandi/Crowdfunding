import React from "react";
import ReactDom from 'react-dom'
import '../Styles/Modal.css'
import NoReward from "./NoReward";
import ProjectModal from "./ProjectModal";



const Modal = ({isCloseM}) => {
      
      return ReactDom.createPortal(
            <div className="modalBackground">
                  <div className="container_modal">
                     <ProjectModal isCloseM={isCloseM}/>
                     <NoReward/>
                  </div>
            </div>,
            document.getElementById('modal')
      )
};

export default Modal;


