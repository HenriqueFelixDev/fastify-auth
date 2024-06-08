import { FastifyPluginCallback } from 'fastify';

const auth: FastifyPluginCallback = (fastify, _, done) => {
	fastify.route({
		schema: {
			tags: ['Auth'],
		},
		method: 'get',
		url: '/oauth/google',
		handler: () => {
			return { route: 'Google Auth' };
		}
	});

	fastify.route({
		schema: {
			tags: ['Auth'],
		},
		method: 'post',
		url: '/refresh-token',
		handler: () => {
			return { route: 'Refresh Token' };
		}
	});

	fastify.route({
		schema: {
			tags: ['Auth'],
		},
		method: 'post',
		url: '/verify-account',
		handler: () => {
			return { route: 'Verify Account' };
		}
	});

	fastify.route({
		schema: {
			tags: ['Auth'],
		},
		method: 'post',
		url: '/reset-password',
		handler: () => {
			return { route: 'Reset Password' };
		}
	});

	done();
};

export default auth;
