import { gql } from '@apollo/client'

export const LOAD_NAVIGATION_LINKS = gql`
    query {
        links {
            title,
            href
        }
        footerContent
    }
`
export const LOAD_PROJECTS = gql`
    query {
        projects {
            title
            content
        }
        messages {
            text
        }
        sidebarTitle
    }
`
