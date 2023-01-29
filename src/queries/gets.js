const CosmosClient = require('@azure/cosmos').CosmosClient
require('dotenv').config();

const url = require('url')

const endpoint = process.env.ENDPOINT
const key = process.env.key
const databaseId = process.env.DBID
const containerId = process.env.CONTAINERID

const options = {
    endpoint: endpoint,
    key: key,
    userAgentSuffix: 'CosmosDBJavascriptQuickstart'
  };

const client = new CosmosClient(options)

async function getGalleries (id) {
    try {
        const querySpec = {
            query: 'SELECT * FROM c WHERE c.eventContentGalleryGuid= "a09e7d19-23e4-4737-a36d-5067721b5808"',
            parameters: []
          }
        
          const { resources: results } = await client
            .database(databaseId)
            .container(containerId)
            .items.query(querySpec)
            .fetchAll()
          return results;

    } catch (err) {
        console.dir('Error on getGalleries', err);        
    }
    return galleries;  
}


module.exports =  {
    getGalleries: getGalleries
}