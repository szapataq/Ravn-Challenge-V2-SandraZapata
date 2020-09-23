import { gql } from '@apollo/client';

const GET_ALL_PEOPLE = gql`
{
    allPeople{
      edges {
        cursor    
        node {
          id
          name
          species{
            name
          }
          homeworld {
            name
          }
        }
      }
    }
  }
`;

const GET_PERSON = gql`
query($id: ID)
  {
    person(id: $id) {
      name
      eyeColor
      hairColor
      skinColor
      birthYear
      vehicleConnection{
          edges{
              node{
                  id
                  name
              }   
          }
      }
    }
  }
`;


export {GET_ALL_PEOPLE ,GET_PERSON};