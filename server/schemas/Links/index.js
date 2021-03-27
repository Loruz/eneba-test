const { gql } = require('apollo-server');
const { GraphQLModule } = require('@graphql-modules/core')

const links = [
  {
    title: 'Projects',
    link: '#',
    component: 'dropdown'
  },
  {
    title: 'About us',
    link: '#',
    component: 'link'
  },
  {
    title: 'Projects',
    link: '#',
    component: 'link'
  },
  {
    title: 'Testimonials',
    link: '#',
    component: 'link'
  },
  {
    title: 'Contacts',
    link: '#',
    component: 'link'
  },
];

module.exports = new GraphQLModule({
  typeDefs: gql`
    type Query {
      links: [Link]
    }
    type Link {
      title: String!
      link: String!
      component: String
    }
  `,
  resolvers: {
    Query: {
      links: () => links,
    }
  },
});
