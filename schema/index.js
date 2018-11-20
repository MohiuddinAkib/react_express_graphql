const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt,
    GraphQLList,
    GraphQLID
  } = require('graphql'),
  axios = require('axios'),
  LaunchType = require('./LaunchType'),
  RocketType = require('./RocketType');

// Axios default
axios.defaults.baseURL = 'https://api.spacexdata.com/v3';

const RoouQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'Center for gathering all sub queries',
  fields: {
    launches: {
      type: new GraphQLList(LaunchType),
      resolve: () => axios.get('/launches').then(res => res.data)
    },
    launch: {
      type: LaunchType,
      args: {
        filght_number: { type: GraphQLInt }
      },
      resolve: async (parent, args) => {
        try {
          const { data } = await axios.get(`/launches/${args.filght_number}`);
          return data;
        } catch (error) {
          console.log(error);
        }
      }
    },
    rockets: {
      type: new GraphQLList(RocketType),
      resolve: () => axios.get('/rockets').then(res => res.data)
    },
    rocket: {
      type: RocketType,
      args: { rocket_id: { type: GraphQLID } },
      resolve: async (parent, { rocket_id }) => {
        try {
          const { data } = await axios.get(`/rockets/${rocket_id}`);
          return data;
        } catch (error) {
          console.log(error);
        }
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RoouQuery
});
