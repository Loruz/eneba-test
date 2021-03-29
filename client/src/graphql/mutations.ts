import {gql} from '@apollo/client'

export const SUBMIT_MESSAGE = gql`
    mutation addMessage($firstName: String $lastName: String $message: String) {
        addMessage(firstName: $firstName lastName: $lastName message: $message) {
            text
        }
    }
`
