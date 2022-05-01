import React, { useState } from "react";
import Modal from "./Components/Modal";
import Backed from "./Components/Backed";
import ContentProject from "./Components/ContentProject";
import ImageFondo from "./Components/ImageFondo";
import ItemsProject from "./Components/ItemsProject";
import Mahogany from "./Components/Mahogany";
import Mastercraft from "./Components/Mastercraft";
import Nav from "./Components/Nav";
import Exito from "./Components/Exito";

const buyItems = [
  {
    name: "Bamboo Stand",
    price: "Pledge $25 or more",
    text: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
    number: "101",
    left: "left",
    valueBtn: "Select Reward",
  },

  {
    name: "Black Edition Stand",
    price: "Pledge $75 or more",
    text: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    number: "64",
    left: "left",
    valueBtn: "Select Reward",
  },
];

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [exitoModal, setExitoModal] = useState(false);
  const [piedgeNoReward, setPiedgeNoReward] = useState(false);
  const [itemsReward, setItemsReward] = useState(false);
  const [blackEdition, setBlackEdition] = useState(false)
  const [onValue, setOnValue] = useState("");

  const isOpen = () => {
    setOpenModal(true);
  };
  const isCloseM = () => {
    setOpenModal(false);
    setExitoModal(false);
  };
  const exitoMod = () => {
    setOpenModal(false);
    if (onValue) {
      setExitoModal(true);
    }else{
      
    }
  };

  const sendPiedge = (num) => {
    setOpenModal(false)
    if(onValue >= num){
      setExitoModal(true)
    }else{
      alert('El número no puede ser menor a ' + num)
    }
  }

  return (
    <>
      <Nav />
      <ImageFondo />
      <Mastercraft isOpen={isOpen} />
      <Backed />
      <ContentProject>
        {buyItems.map((el) => (
          <ItemsProject
            key={el.name}
            name={el.name}
            price={el.price}
            text={el.text}
            number={el.number}
            left={el.left}
            valueBtn={el.valueBtn}
            isOpen={isOpen}
          />
        ))}
        <Mahogany />
      </ContentProject>

      {openModal && (
        <Modal
          isCloseM={isCloseM}
          exitoMod={exitoMod}
          sendPiedge={sendPiedge}
          onValue={onValue}
          setOnValue={setOnValue}
          piedgeNoReward={piedgeNoReward}
          setPiedgeNoReward={setPiedgeNoReward}
          itemsReward={itemsReward}
          setItemsReward={setItemsReward}
          blackEdition={blackEdition}
          setBlackEdition={setBlackEdition}
          isOpen={isOpen}
    
        />
      )}

      {exitoModal && <Exito isCloseM={isCloseM} />}
    </>
  );
}

export default App;
