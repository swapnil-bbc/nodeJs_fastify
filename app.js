const fastify = require('fastify')({ logger: true });
const dbConnector = require('./config/database.js');
const contest = require('./controller/contestController.js');

function build() {
const app = fastify;
app.register(dbConnector);

app.get('/', (request, reply) => {
    reply.send({ "hello": 'world from fastify'})
});
app.register(require("./routes/contestRoute"));
return app;
}
module.exports = { build };
