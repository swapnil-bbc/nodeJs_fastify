const fastify = require('fastify')({ logger: true });
const dbConnector = require('./config/database.js');
const contest = require('./controller/contestController.js');

fastify.register(dbConnector);

fastify.get('/', (request, reply) => {
    reply.send({ "hello": 'world from fastify'})
});

fastify.register(require("./routes/contestRoute"));

fastify.listen(3000, (err) => {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
});
  