import { FastifyInstance } from 'fastify';
import swaggerPlugin from '@fastify/swagger';
import swaggerUIPlugin from '@fastify/swagger-ui';

export const configureSwagger = (fastify: FastifyInstance) => {
  fastify.register(swaggerPlugin, {
    prefix: '/swagger',
    openapi: {
      openapi: '3.0.0',
      info: {
        title: 'Fastify Auth Swagger',
        description: 'Testing the Fastify swagger API',
        version: '0.1.0',
      },
      tags: [
        { name: 'Auth', description: 'Authentication related end-points' },
      ],
      components: {
        securitySchemes: {
          apiKey: {
            type: 'apiKey',
            name: 'apiKey',
            in: 'header',
          },
        },
      },
    },
  });

  fastify.register(swaggerUIPlugin, {
    routePrefix: '/docs',
    staticCSP: true,
  });
};
