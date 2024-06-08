import Fastify from 'fastify';

const app = Fastify({
	logger: true,
});

app.get('/', () => {
	return {result: 'Hello World'};
});

export default app;