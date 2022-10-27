
// import resolvers from "./resolvers";
// import schema from "./schema";
// import {graphqlHTTP} from "express-graphql"
const express = require("express");
const resolvers = require("./resolvers")
const schema = require(__dirname+"/schema")
const express_graphql = require('express-graphql');
const { graphql, SchemaMetaFieldDef } = require("graphql");

const app = express();

app.get("/", (req,res)=>{
    res.send("up and running with graphql crash course");
})

const root = {lco: ()=> console.log("learnCodeOnline")}
app.use("/graphql", express_graphql.graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql:true

}))

app.listen(3000, ()=> console.log("server is running at 3000"))
