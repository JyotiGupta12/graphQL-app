// import {buildSchema} from 'graphql'
const graphql = require('graphql')
const schema = graphql.buildSchema(`
    type Course{
        id: ID
        courseName: String
        catagory: String
        price: Int
        language: String
        email: String
        stack: Stack
        teachingAssists: [teahingAssist]
    }
    type teahingAssist{
        firstName: String
        lastname: String
        experience: Int
    }
    enum Stack{
        WEB
        MOBILE
        OTHER
    }

    type Query{
        getCourse(id: ID): Course
    }
    input courseInput{
        id: ID
        courseName: String!
        catagory: String
        price: Int!
        language: String
        email: String
        stack: Stack
        teachingAssists: [teachingAssistInput]!
    }
    input teachingAssistInput{
        firstName: String
        lastname: String
        experience: Int
    }
    type Mutation{
        createCourse(input:courseInput ): Course
    }
`)
// export default schema;
module.exports = schema;
