const {
    listContest, createContest
} = require('../controller/contestController');

async function routes(fastify, options) {
    fastify.get('/getContest',listContest);
    fastify.post('/createContest',createContest);
  }
  module.exports = routes;