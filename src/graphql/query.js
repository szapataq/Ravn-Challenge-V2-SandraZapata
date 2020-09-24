import { gql } from "@apollo/client";

const GET_ALL_PEOPLE = gql`
  query($length: Int, $after: String) {
    allPeople(first: $length, after: $after) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          id
          name
          species {
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
  query($id: ID!) {
    person(id: $id) {
      eyeColor
      hairColor
      skinColor
      birthYear
      vehicleConnection {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  }
`;

export { GET_ALL_PEOPLE, GET_PERSON };
