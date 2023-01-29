//1. define types
//2. define relationships between types
//3. define root queries

const graphql = require('graphql');

const {getGalleries} = require('../queries/gets');
const {GalleryType, } = require('../types/types');

let galleries= [];
let products = [];
let users = [];
let productusers = [];

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



//root query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        //name of the query is project
        gallery:{
            type:GalleryType,
            //args = parameters sent by use to query. comes down pipeline as string?
            args:{
                    id:{type:GraphQLString}
                 },
            //resolve: this is where we get data from db/other source.     
            resolve(parentValue, args){   

                galleries = getGalleries(args.id);                  
            }
        } ,
        galleries:{
            type: new GraphQLList(GalleryType),
            resolve(parentValue, args){
                galleries = getGalleries();  

                return galleries;
            }
        }         
    }

});

module.exports = new  GraphQLSchema({
    query: RootQuery
});