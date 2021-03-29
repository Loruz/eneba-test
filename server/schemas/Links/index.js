const { gql } = require('apollo-server')
const { GraphQLModule } = require('@graphql-modules/core')

const links = [
  {
    title: 'Home',
    href: '#',
    component: 'link'
  },
  {
    title: 'Projects',
    href: '#',
    component: 'dropdown'
  },
  {
    title: 'About us',
    href: '#',
    component: 'link'
  },
  {
    title: 'Testimonials',
    href: '#',
    component: 'link'
  },
  {
    title: 'Contacts',
    href: '#',
    component: 'link'
  },
]
const footerContent = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.'

module.exports = new GraphQLModule({
  typeDefs: gql`
      type Query {
          links: [Link]
          footerContent: String
      }
      type Link {
          title: String!
          href: String!
          component: String
      }
  `,
  resolvers: {
    Query: {
      links: () => links,
      footerContent: () => footerContent,
    }
  },
})
