import { gql } from '@apollo/client';

export const JOIN_STREAM = gql`
    mutation addStream (
        $templateId: ID!
        $subscriberId: ID!
    ) {
        addStream (
            templateId: $templateId
            subscriberId: $subscriberId
        ) {
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
`;

export const LEAVE_STREAM = gql`
    mutation deleteStream (
        $templateId: ID!
        $subscriberId: ID!
    ) {
        deleteStream (
            templateId: $templateId
            subscriberId: $subscriberId
        ) {
            id
        }
    }
`;  

export const MARK_READ = gql`
    mutation markRead (
        $id: ID!
    ) {
        markRead (
            id: $id
        )
    }
`;