import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_PEOPLE } from "../graphql/query.js";
import Loader from "./Loader";
import Error from "./Error";

import "../style/Characters.scss";
import ItemCharacter from "./ItemCharacter.jsx";

const length = 5;

const Characters = () => {
  const { data, loading, error, fetchMore } = useQuery(GET_ALL_PEOPLE, {
    variables: { length: length },
  });
  const onLoadMore = () => {
    fetchMore({
      variables: {
        length: length,
        after: data.allPeople.pageInfo.endCursor,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.allPeople.pageInfo.hasNextPage) return prev;

        return Object.assign({}, prev, {
          allPeople: {
            __typename: "PeopleConnection",
            edges: [
              ...prev.allPeople.edges,
              ...fetchMoreResult.allPeople.edges,
            ],
            pageInfo: fetchMoreResult.allPeople.pageInfo,
          },
        });
      },
    });
  };
  if (loading)
    return (
      <div className="containter-characters">
        <Loader />
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
      specie: item.node.species !== null ? item.node.species.name : "Human",
      homeworld: item.node.homeworld.name,
    };
  });
  return (
    <div className="containter-characters">
      <div>
        {characters.map((item) => {
          return (
            <ItemCharacter
              id={item.id}
              name={item.name}
              specie={item.specie}
              homeworld={item.homeworld}
            />
          );
        })}
      </div>
      <button
        onClick={() => {
          onLoadMore();
        }}
      >
        Load More
      </button>
    </div>
  );
};

export default Characters;
