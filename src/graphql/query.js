import { gql } from '@apollo/client';

const ALL_PEOPLE = gql`
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

export default ALL_PEOPLE;