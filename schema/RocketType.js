const { GraphQLObjectType, GraphQLString, GraphQLID } = require('graphql');

// Rocket Object
const RocketType = new GraphQLObjectType({
  name: 'Rocket',
  description: 'Object that contains info about rocket',
  fields: () => ({
    rocket_id: { type: GraphQLID },
    rocket_name: { type: GraphQLString },
    rocket_type: { type: GraphQLString }
  })
});

module.exports = RocketType;
