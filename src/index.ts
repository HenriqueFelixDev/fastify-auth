import createApp from './app';

const run = async () => {
	const app = createApp({
		logger: true,
	});

	await app.ready();

	app.swagger();
	
	app.listen({ port: 3000 });
};

run();