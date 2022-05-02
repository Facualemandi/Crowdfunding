import React, { useState } from "react";
import "../Styles/Rewards.css";
const Rewards = ({
  itemsReward,
  setItemsReward,
  setPiedgeNoReward,
  setBlackEdition,
  sendPiedge,
  onValue,
  setOnValue,
  error,
}) => {
  const activeRewards = () => {
    setItemsReward(true);
    setPiedgeNoReward(false);
    setBlackEdition(false);
  };


 const changeBamboo = (e) => {
   setOnValue(e.target.value)
 }
  return (
    <>
      <section>
        <div
          className={`rewardsTotal ${itemsReward && "bamboo-active"}`}
          onClick={activeRewards}
        >
          <div className="containerTop">
            <h2>Bamboo Stand</h2>
            <p className="price_reward">Pledge $25 or more</p>
            <span className="span_reward">
              <p> 101</p>
              <p>left</p>
            </span>
          </div>

          <div className="parrafo_reward">
            <p>
              You get an ergonomic stand made of natural bamboo. You've helped
              us launch our promotional campaign, and you’ll be added to a
              special Backer member list.
            </p>
          </div>

          {itemsReward && (
            <>
              <hr className="hrModal" />
              <div className="totalPiedgeNoReward">
                <span className="enterPiedgeBamboo"> Enter Your Piedge </span>
                <input type="number" placeholder="Piedge" value={onValue}  onChange={changeBamboo}/>
                 {error ? <p className="error">Piedge $25 or more.</p> : <p></p>}
                <button onClick={() => sendPiedge(25)}> Continue </button>
              </div>
            </>
          )}
        </div>
        
      </section>
    </>
  );
};

export default Rewards;
