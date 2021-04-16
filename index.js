// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
const path = require('path')

// Register plugins
fastify.register(require('fastify-static'), require('./config/static.js').public)

// Declare a route
fastify.get('/', async (request, reply) => {
  return reply.sendFile('index.html')
})

// Declare a route
fastify.get('/sun', async (request, reply) => {
  return { hello: 'sun' }
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(process.env.PORT, '0.0.0.0')
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()