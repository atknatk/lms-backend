export default ({ env }) => ({
	connection: {
		client: 'postgres',
		connection: {
		host: env('DATABASE_HOST', 'localhost'),
			port: env.int('DATABASE_PORT', 5432),
			database: env('DATABASE_NAME', 'lms-dev'),
			user: env('DATABASE_USERNAME', 'lms'),
			password: env('DATABASE_PASSWORD', 'nRes1UE1bdqYq9E'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
