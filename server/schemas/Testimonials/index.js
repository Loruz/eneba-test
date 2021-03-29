const { gql, UserInputError } = require('apollo-server')
const { GraphQLModule } = require('@graphql-modules/core')

const testimonials = [
  {
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.',
  },
  {
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.',
  },
]

const messages = [
  {
    first_name: 'Lorem',
    last_name: 'Ipsum',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam.'
  }
]

const sidebarTitle = 'Lorem ipsum dolor'

module.exports = new GraphQLModule({
  typeDefs: gql`
      type Query {
          testimonials: [Testimonial],
          messages: [Message],
          sidebarTitle: String
      }
      type Testimonial {
          text: String!
      }
      type Message {
          first_name: String!
          last_name: String!
          text: String!
      }

      type Mutation {
          addMessage(firstName: String lastName:String message: String): Message!
      }
  `,
  resolvers: {
    Query: {
      testimonials: () => testimonials,
      messages: () => messages,
      sidebarTitle: () => sidebarTitle,
    },
    Mutation: {
      addMessage: (_, { firstName, lastName, message }) => {
        let errors = {}
        if (!firstName) {
          errors.first_name = 'First name is required'
        }
        if (!lastName) {
          errors.last_name = 'Last name is required'
        }

        if (!message) {
          errors.message = 'Last name is required'
        }

        if (Object.keys(errors).length) {
          throw new UserInputError(
            'Fields are required',
            { errors }
          )
        }
        let messageItem = {
          first_name: firstName,
          last_name: lastName,
          text: message
        }

        messages.push(messageItem)
        return messageItem
      }
    }
  },
})
