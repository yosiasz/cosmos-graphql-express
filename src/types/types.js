
const graphql = require('graphql');
const { getProductUsers} = require('../queries/gets');


//destructure
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLID,
    GraphQLNonNull
} = graphql;

const GalleryType = new GraphQLObjectType({
    name: 'Galleries',
    fields:() => ({
        id: {type: GraphQLString},
        title: {type:GraphQLString},
        description: {type:GraphQLString}
    })
});

module.exports =  {
    GalleryType: GalleryType,
}