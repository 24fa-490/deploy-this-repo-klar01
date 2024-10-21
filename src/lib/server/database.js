
import postgres from 'postgres'

// see env variables in .env
const DATABASE_URL = process.env.DATABASE_URL;

const sql = postgres(DATABASE_URL)

export default sql;
