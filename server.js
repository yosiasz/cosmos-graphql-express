const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./src/schema/schema.js');

const app = express();
const galleries = [];

app.use('/graphql', graphqlHTTP({
    schema:schema,
    rootValue: galleries,
    context: galleries,
    graphiql:true
}));

app.listen(4100, () => {
    console.log('Server is running on port 4100..');
});