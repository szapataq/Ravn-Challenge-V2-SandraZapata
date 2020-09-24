import React from "react";
import arrowLeft from "../assets/icons/arrow-right.svg";
import { Link } from "react-router-dom";

const ItemCharacter = ({ id, name, specie, homeworld }) => {
  return (
    <Link key={id} className="link-detail" to={`/characters/${id}`}>
      <div className="character-cell">
        <div>
          <h2>{name}</h2>
          <p>
            {specie} from {homeworld}
          </p>
        </div>
        <img src={arrowLeft} alt="arrow-left"></img>
      </div>
    </Link>
  );
};

export default ItemCharacter;
