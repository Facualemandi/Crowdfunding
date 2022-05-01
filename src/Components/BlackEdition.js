import React from "react";
import '../Styles/BlackEdition.css'

const BlackEdition = ({
  blackEdition,
  setBlackEdition,
  setItemsReward,
  setPiedgeNoReward,
  onValue,
  setOnValue,
  sendPiedge,
  
}) => {
  const isBlackEdit = () => {
    setBlackEdition(true);
    setItemsReward(false);
    setPiedgeNoReward(false);
  };

  const changeBlackEdition = (e) => {
    setOnValue(e.target.value)
  }

  return (
    <>
      <section>
        <div
          className={`rewardsTotal ${blackEdition && "bamboo-active"}`}
          onClick={isBlackEdit}
        >
          <div className="containerTop">
            <h2>Black Edition Stand</h2>
            <p className="price_reward">Pledge $75 or more</p>
            <span className="span_reward">
              <p>64</p>
              <p>left</p>
            </span>
          </div>

          <div>
            <p>
              You get a Black Special Edition computer stand and a personal
              thank you. You’ll be added to our Backer member list. Shipping is
              included.
            </p>
          </div>

          {blackEdition && (
            <>
              <hr className="hrModal" />
              <div className="totalPiedgeNoReward">
                <input
                  type="number"
                  placeholder="Piedge"
                  value={onValue}
                  onChange={changeBlackEdition}
                />
                <button onClick={() => sendPiedge(75)}> Continue </button>
              </div>
            </>
          )}
        </div>
        )
      </section>
    </>
  );
};

export default BlackEdition;
