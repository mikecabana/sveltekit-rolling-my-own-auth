import { defineConfig } from 'drizzle-kit';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
	schema: './src/lib/db/schema.ts',
	driver: 'turso',
	dialect: 'sqlite', // 'postgresql' | 'mysql' | 'sqlite'
	dbCredentials: {
		url: process.env.DATABASE_URL as string,
		authToken: process.env.DATABASE_AUTH_TOKEN as string
	},
	out: './.drizzle'
});
