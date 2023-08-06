import { MongoClient } from "mongodb";

// Connection URL
const url = process.env.MONGODB_PATH;
const client = new MongoClient(url);

// Database Name
const dbName = "mindx";

async function databaseConfig() {
  await client.connect();
  console.log(`Connected successfully to database ${dbName}`);
}

export const db = client.db(dbName);

export default databaseConfig;
