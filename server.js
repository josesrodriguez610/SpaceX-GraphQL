const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const schema = require("./schema");

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(5000, () => console.log("listening on 5000"));
