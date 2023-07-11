import { gql } from '@apollo/client';

export const GET_STREAM_MESSAGES = gql`
    query Stream (
        $id: ID!
    ) {
        stream (
            id: $id
        ) {
            id
            templateId
            messages {
                id 
                content
                fromStreamOwner
                timeSent
                isBlast
            }
        } 
    }
`; 

export const GET_STREAM_TEMPLATE_INFO = gql`
    query Stream (
        $id: ID!
    ) {
        stream (
            id: $id
        ) {
            id
            template {
                id
                title
                price
                description
                ownerId
                bookingUrl
            }
        }
    }
`;