const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const User = require('./models/Users');
require("./Config")

const typeDefs = gql`
type User{
    id:ID!
    username:String
    email:String
}
type Query {
    getUsers: [User]
}

type Mutation {
    addUsers(userName:String!, email:String!,): User
}
`;

const resolvers ={
    Query:{
        getUsers: async () => await User.findById({}).exec()
    },
    Mutation:{
        addUsers:async (_, args) => {
            try{
                let response = await User.create(args);
                return response
            } catch(error){
                    return error.message
            }
        }
    }
};

const server = new ApolloServer({typeDefs,resolvers});
const app = express();

server.applyMiddleware({app});

app.listen({port:4000},()=>
console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)