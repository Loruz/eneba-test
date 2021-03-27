const { gql } = require('apollo-server');
const { GraphQLModule } = require('@graphql-modules/core')

const testimonials = [
  {
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.',
  },
  {
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.',
  },
];

module.exports = new GraphQLModule({
  typeDefs: gql`
    type Query {
      testimonials: [Testimonial]
    }
    type Testimonial {
      text: String!
    }
  `,
  resolvers: {
    Query: {
      testimonials: () => testimonials,
    }
  },
});
