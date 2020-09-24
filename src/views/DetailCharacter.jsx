import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PERSON } from "../graphql/query.js";
import { useParams } from "react-router-dom";
import "../style/DetailCharacter.scss";

const DetailCharacter = () => {
  let person = [];
  let vehicle = [];

  let { id } = useParams();
  const { data } = useQuery(GET_PERSON, { variables: { id: id } });
  if (data) {
    person = data.person;
    vehicle = data.person.vehicleConnection.edges.map((item) => item.node.name);
  }
  return (
    <div className="container-details">
      <div className="general-container">
        <div>
          <p className="title-info">General Information</p>
          <div className="item-list">
            <p>Eye Color</p>
            <p>{person.eyeColor}</p>
          </div>
          <div className="item-list">
            <p>Hair Color</p>
            <p>{person.hairColor}</p>
          </div>
          <div className="item-list">
            <p>Skin Color</p>
            <p>{person.skinColor}</p>
          </div>
          <div className="item-list">
            <p>Birth Year</p>
            <p>{person.birthYear}</p>
          </div>
        </div>
        <div>
          <p className="title-info">Vehicles</p>
          {vehicle.map((item, index) => (
            <div className="item-list">
              <p key={index}>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailCharacter;
