const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLBoolean,
    GraphQLInt
  } = require('graphql'),
  { GraphQLDateTime } = require('graphql-iso-date'),
  RocketType = require('./RocketType');

// Lauch Object
const LaunchType = new GraphQLObjectType({
  name: 'Launch',
  description: 'Object that contains info about rocket launch',
  fields: () => ({
    flight_number: { type: GraphQLInt },
    mission_name: { type: GraphQLString },
    launch_year: { type: GraphQLString },
    launch_date_utc: { type: GraphQLDateTime },
    launch_date_local: { type: GraphQLString },
    launch_success: { type: GraphQLBoolean },
    rocket: { type: RocketType }
  })
});

module.exports = LaunchType;
