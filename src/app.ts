import Fastify, { FastifyServerOptions } from 'fastify';
import auth from './routes/auth.routes';
import { configureSwagger } from './config/swagger.config';
import fastifyCors from '@fastify/cors';

const createApp = (opts: FastifyServerOptions = {}) => {
	const app = Fastify(opts);

	configureSwagger(app);

	app.register(fastifyCors);
	
	// Routes
	app.get('/', () => ({ status: 'Running' }));
	app.register(auth, { prefix: '/v1/auth' });

	return app;
};

export default createApp;