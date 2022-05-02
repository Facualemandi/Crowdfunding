import React, { useState } from "react";
import "../Styles/NoReward.css";
const NoReward = ({
  exitoMod,
  onValue,
  setOnValue,
  piedgeNoReward,
  setPiedgeNoReward,
  setItemsReward,
  setBlackEdition,
}) => {
  const onChangeValue = (e) => {
    setOnValue(e.target.value);
  };

  const piedgeTrue = () => {
    setPiedgeNoReward(true);
    setItemsReward(false);
    setBlackEdition(false);
  };

  return (
    <>
      <section
        className={`sectionContainer_noReward ${
          piedgeNoReward && "container-active"
        }`}
      >
        <div onClick={piedgeTrue}>
          <div className="noReward">
            <input type="radio" className="chexbox_noReward" />
            <h3>Pledge with no reward</h3>
          </div>
          <p>
            Choose to support us without a reward if you simply believe in our
            project. As a backer, you will be signed up to receive product
            updates via email
          </p>
        </div>

        {piedgeNoReward && (
          <>
            <hr className="hrModal" />

            <div className="totalPiedgeNoReward">
              <span className="enterPiedge"> Enter Your Piedge </span>
              <input
                type='number'
                placeholder="Piedge"
                onChange={onChangeValue}
                value={onValue}
              />
              <button onClick={exitoMod}> Continue </button>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default NoReward;
