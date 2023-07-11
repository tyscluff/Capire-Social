import { gql } from "@apollo/client";

export const UPDATE_EXPO_TOKEN = gql`
    mutation updateExpoToken (
        $expoToken: String!
    ) {
        updateExpoToken (
            expoToken: $expoToken
        ) {
            expoToken
            id
        }
    }
`;

export const DELETE_USER = gql`
    mutation deleteUser {
        deleteUser {
            id
        } 
    }
`;