import { gql } from '@apollo/client';

export const GET_TEMPLATES_BY_NAME = gql`
    query Template (
        $search: String!
    ) {
        templatesByName (
            search: $search
        ) {
            id
            title
            price
            photoId
            description
            ownerId
            bookingUrl
        }
    }
`;

export const USER_IN_STREAM = gql`
    query Template (
        $userId: ID!
        $templateId: ID!
    ) {
        checkIfUserIsInStream (
            userId: $userId
            templateId: $templateId
        )
    }
`;