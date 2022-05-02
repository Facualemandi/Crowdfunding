import React from "react";
import ReactDom from "react-dom";
import "../Styles/Modal.css";
import BlackEdition from "./BlackEdition";
import NoReward from "./NoReward";
import ProjectModal from "./ProjectModal";
import Rewards from "./Rewards";

const Modal = ({
  isCloseM,
  exitoMod,
  onValue,
  setOnValue,
  piedgeNoReward,
  setPiedgeNoReward,
  itemsReward,
  setItemsReward,
  blackEdition,
  setBlackEdition,
  sendPiedge,
  isOpen,
  error,
}) => {
  return ReactDom.createPortal(
    <div className="modalBackground">
      <div className="container_modal">
        <ProjectModal isCloseM={isCloseM} />
        <NoReward
          exitoMod={exitoMod}
          onValue={onValue}
          setOnValue={setOnValue}
          piedgeNoReward={piedgeNoReward}
          setPiedgeNoReward={setPiedgeNoReward}
          setItemsReward={setItemsReward}
          setBlackEdition={setBlackEdition}
        />
        <Rewards
          itemsReward={itemsReward}
          setItemsReward={setItemsReward}
          setPiedgeNoReward={setPiedgeNoReward}
          setBlackEdition={setBlackEdition}
          sendPiedge={sendPiedge}
          onValue={onValue}
          setOnValue={setOnValue}
          error={error}
        />

        <BlackEdition
        blackEdition={blackEdition}
        setBlackEdition={setBlackEdition}
        setItemsReward={setItemsReward}
        setPiedgeNoReward={setPiedgeNoReward}
        onValue={onValue}
        setOnValue={setOnValue}
        sendPiedge={sendPiedge}
        isOpen={isOpen}
        error={error}
        />


      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
