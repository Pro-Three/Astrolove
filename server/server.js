const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const db = require('./config/connection');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');

require("dotenv").config()

const app = express();
const PORT = process.env.PORT || 5000;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});
console.log(`SERVER FILE ACCESSED`);

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../krush/build')));
}
  
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../krush/public/index.html'));
}); 

// // Step 1:
// app.use(express.static(path.resolve(__dirname, "./client/build")));
// // Step 2:
// app.get("*", function (request, response) {
//   response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
// });

// app.listen(PORT, () => {
//   console.log(`API server running on port ${PORT}!`);
//   // log where we can go to test our GQL API
//   console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
// });

console.log('PORT value:  ', PORT)
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});

