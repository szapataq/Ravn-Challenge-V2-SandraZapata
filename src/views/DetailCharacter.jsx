import React from 'react';
import { useParams } from "react-router-dom";
import { useQuery} from '@apollo/client';
import {GET_PERSON} from '../graphql/query.js';
const DetailCharacter = () => {
    let { id } = useParams();
    // console.log(id)
    const { data }= useQuery(GET_PERSON,{variables:{id:id}});
    console.log(data);

    return (
        <>
        {/* <div>{
            data.person.map(item=> <p>{item.name}</p>)
            }
        </div> */}
           <h3>Aqui va el detalle{id}</h3> 
        </>
    )
}

export default DetailCharacter;
