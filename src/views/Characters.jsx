import React from 'react';
import { useQuery} from '@apollo/client';
import ALL_PEOPLE from '../graphql/query.js';
import Loading from '../components/Loading';
import Error from '../components/Error';
import arrowLeft from "../assets/icons/arrow-right.svg";
import { Link } from "react-router-dom";

const Characters = () => {
    const {data, loading, error}= useQuery(ALL_PEOPLE);
    if(loading) return (<Loading/>);
    if(error) return(<Error/>)

    const characters = data.allPeople.edges.map(item=>{
        return {name:item.node.name, 
                id:item.node.id,
                homeworld: item.node.homeworld.name}
    });

    return (
        <div className="containter-characters">
            {
                characters.map(item => {
                  return(
                    <Link key={item.id} className="link-detail" to={`/characters/${item.id}`}>
                      <div className="character-cell">
                        <div>
                          <h2>{item.name}</h2>
                          <p>from {item.homeworld}</p>
                        </div>
                        <img src={arrowLeft} alt="arrow-left"></img>
                      </div>
                    </Link>

                  )                  
                })
            }
        </div>
    )
}

export default Characters;

