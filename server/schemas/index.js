const { GraphQLModule } = require('@graphql-modules/core')
const ProjectModule = require('./Project')
const TestimonialModule = require('./Testimonials')
const LinksModule = require('./Links')

module.exports = new GraphQLModule({
  imports: [
    ProjectModule,
    TestimonialModule,
    LinksModule
  ]
})
