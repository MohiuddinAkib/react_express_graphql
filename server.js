const express = require('express'),
  graphqlHTTP = require('express-graphql'),
  app = express(),
  schema = require('./schema'),
  morgan = require('morgan');

// Morgan middleware
app.use(morgan('dev'));
// Set graphqlHTTP
app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));
// Port
const port = process.env.PORT || 5000;
// Listen for request
app.listen(port, () => console.log(`Server running on port ${port}`));
