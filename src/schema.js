const { gql } = require("apollo-server");
/*
The gql is a template literal tag. Template literals were introduced in recent versions of ECMAScript to provide embedded expressions (i.e. `A string with interpolated ${variables}`) and template literal tags exist to provide additional functionality for what would otherwise be a normal template literal.

In the case of GraphQL, the gql tag is used to surround GraphQL operation and schema language (which are represented as Strings), and makes it easier to differentiate from ordinary strings. This is particularly useful when performing static analysis on GraphQL language (e.g. to enable syntax highlighting, code generation, etc.) and avoids need for tools to "guess" if a string contains GraphQL language.
*/

//Tips: The ! denotes a field is required, while [] denotes the field will return an array of items.

const typeDefs = gql`
  type User {
    id: Int!
    name: String!
    email: String!
    recipes: [Recipe!]!
  }

  type Recipe {
    id: Int!
    title: String!
    ingredients: String!
    direction: String!
    user: User!
  }

  type Query {
    user(id: Int!): User
    allRecipes: [Recipe!]!
    recipe(id: Int!): Recipe
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!): User!
    createRecipe(
      userId: Int!
      title: String!
      ingredients: String!
      direction: String!
    ): Recipe!
  }
`;

module.exports = typeDefs;
