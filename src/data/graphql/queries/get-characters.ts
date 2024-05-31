import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
 query Characters($name: String) {
   characters(filter: { name: $name }) {
     results {
      id
       name
       species
       status
       type
       gender
       image
     }
   }
 }
`;
