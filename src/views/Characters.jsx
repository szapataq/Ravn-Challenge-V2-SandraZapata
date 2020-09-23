import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_PEOPLE } from "../graphql/query.js";
import Loading from "../components/Loading";
import Error from "../components/Error";
import arrowLeft from "../assets/icons/arrow-right.svg";
import { Link } from "react-router-dom";
import "../style/Characters.scss";

const Characters = () => {
  const { data, loading, error } = useQuery(GET_ALL_PEOPLE);
  if (loading)
    return (
      <div className="containter-characters">
        <Loading />
      </div>
    );
  if (error)
    return (
      <div className="containter-characters">
        <Error />
      </div>
    );

  const characters = data.allPeople.edges.map((item) => {
    return {
      name: item.node.name,
      id: item.node.id,
      homeworld: item.node.homeworld.name,
    };
  });

  return (
    <div className="containter-characters">
      {characters.map((item) => {
        return (
          <Link
            key={item.id}
            className="link-detail"
            to={`/characters/${item.id}`}
          >
            <div className="character-cell">
              <div>
                <h2>{item.name}</h2>
                <p>from {item.homeworld}</p>
              </div>
              <img src={arrowLeft} alt="arrow-left"></img>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Characters;
