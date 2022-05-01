import React, { useState } from "react";
import "../Styles/Rewards.css";
const Rewards = ({itemsReward, setItemsReward, setPiedgeNoReward, setBlackEdition}) => {


  const activeRewards = () => {
    setItemsReward(true);
    setPiedgeNoReward(false)
    setBlackEdition(false)
  };
  return (
    <>
      <section>
          <div className={`rewardsTotal ${itemsReward && 'bamboo-active'}`} onClick={activeRewards}>
            <div className="containerTop">
              <h2>Bamboo Stand</h2>
              <p className="price_reward">Pledge $25 or more</p>
              <span className="span_reward">
                <p> 101</p>
                <p>left</p>
              </span>
            </div>

            <div>
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
                  <input type="number" placeholder="Piedge" />
                  <button> Continue </button>
                </div>
              </>
            )}
          </div>
        )
      </section>
    </>
  );
};

export default Rewards;
