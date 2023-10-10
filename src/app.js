const fastify = require('fastify')({ logger: true });
require('dotenv').config();

fastify.register(require('./routes/populationRoutes'));

const start = async () => {
  try {
    fastify.listen({ port: process.env.API_PORT || 5555, host: '127.0.0.1'});
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
