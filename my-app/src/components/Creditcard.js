import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

const Creditcard = () => {
  const initialState = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  };

  const [card, setCard] = useState(initialState);

  return (
    <div>
      <div>react-credit-cards</div>
      <div>
        <form>
          <input
            type="tele"
            name="number"
            placeholder="Card Number"
            onChange={(e) => setCard({ ...card, number: e.target.value })}
          />
        </form>
        <Cards
          cvc={card.cvc}
          expiry={card.expiry}
          focused={card.focus}
          name={card.name}
          number={card.number}
        />
      </div>
    </div>
  );
};

export default Creditcard;
