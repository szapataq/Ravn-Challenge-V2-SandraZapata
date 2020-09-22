import React from 'react';
import { useQuery} from '@apollo/client';
import ALL_PEOPLE from '../graphql/query.js';
import '../style/Characters.scss';
import Loading from '../components/Loading';
import Error from '../components/Error';

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
        <div className="containter-character-cell">
            {
                characters.map(item => {
                  return(
                    <div key={item.id} className="character-cell">
                      <p>{item.name}</p>
                      <p>from {item.homeworld}</p>
                    </div>
                  )                  
                })
            }
        </div>
    )
}

export default Characters;

