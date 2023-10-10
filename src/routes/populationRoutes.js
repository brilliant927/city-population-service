const fastifyPlugin = require('fastify-plugin');

const populationController = require('../controllers/populationController');


module.exports = fastifyPlugin(async (fastify, opts) => {
  fastify.route({
    method: 'GET',
    url: '/api/population/state/:state/city/:city',
    handler: populationController.getPopulation
  });
  fastify.route({
    method: 'PUT',
    url: '/api/population/state/:state/city/:city',
    handler: populationController.updatePopulation
  });
});
