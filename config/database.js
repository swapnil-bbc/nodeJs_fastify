const fastifyPlugin = require('fastify-plugin');
const fastifyMongo = require('fastify-mongodb');
async function dbConnector(fastify){
  fastify.register(fastifyMongo,{
        forceClose: true,
        url: "mongodb://localhost:27017/bbc",
    });
}
module.exports = fastifyPlugin(dbConnector)