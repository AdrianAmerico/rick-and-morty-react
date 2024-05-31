import { gql } from '@apollo/client';

export const GET_CHARACTER_EPISODES = gql`
   query CharactersByIds($ids: [ID!]!) {
    charactersByIds(ids: $ids) {
      image
      id
      name
      status
      episode {
        id
        name
      }
    }
  }
`;
