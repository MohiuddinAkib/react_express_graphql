const express = require('express'),
  graphqlHTTP = require('express-graphql'),
  app = express(),
  schema = require('./schema'),
  cors = require('cors'),
  path = require('path');
//  Cors middleware
app.use(
  cors({
    origin: ['http://localhost:3000'],
    optionsSuccessStatus: 200,
    methods: ['GET']
  })
);
// Set graphqlHTTP
app.use('/graphql', graphqlHTTP({ schema, graphiql: false }));
// Static folder
app.use(express.static('public'));
app.get('*', (req, res) =>
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
);
// Port
const port = process.env.PORT || 5000;
// Listen for request
app.listen(port, () => console.log(`Server running on port ${port}`));
