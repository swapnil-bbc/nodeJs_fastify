const Fastify = require("fastify");
const fp = require("fastify-plugin");
const { build } = require("../app");

function startApp() {
  const app = Fastify();

  beforeAll(async () => {
      console.log("app debug",build);
    void app.register(fp(build));
    await app.ready();
  });

  afterAll(() => app.close());

  return app;
}

module.exports = {startApp};
