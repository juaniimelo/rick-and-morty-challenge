import { gql } from "@apollo/client";

export const GET_ALL_CHARACTERS = gql`
  query GetAllCharacters($page: Int, $name: String) {
    characters(page: $page, filter: { name: $name }) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        species
        image
        episode {
          id
          name
          episode
          air_date
        }
      }
    }
  }
`;
