import { gql } from '@apollo/client';

export const ADD_MESSAGE = gql`
    mutation addMessage (
        $streamId: ID!
        $streamOwnerId: ID!
        $streamSubscriberId: ID! 
        $fromStreamOwner: Boolean!
        $content: String!
        $isFile: Boolean
    ) {
        addMessage (
            streamId: $streamId
            streamOwnerId: $streamOwnerId
            streamSubscriberId: $streamSubscriberId
            fromStreamOwner: $fromStreamOwner
            content: $content
            isFile: $isFile
        ) {
            id
            content
            fromStreamOwner
            timeSent
        }
    }
`; 