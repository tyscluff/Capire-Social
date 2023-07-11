import { gql } from '@apollo/client';

export const GET_MY_STREAMS = gql`
    query User (
        $id: ID!
    ) {
        user (
            id: $id  
        ) { 
            subscribedStreams {
                id
                title
                hasUnread
                owner {
                    id
                    firstName
                    lastName
                }
            }
        }
    }
`;  