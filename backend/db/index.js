
import { DataAPIClient } from "@datastax/astra-db-ts";

// Function to establish connection to Astra DB
async function connectDB() {
    try {
        const client = new DataAPIClient(process.env.ASTRADB_TOKEN);
        const db = await client.db(process.env.ASTRADB_URL);
        return db;  // Return the database instance for use
    } catch (error) {
        console.log('Error connecting to AstraDB:', error);
    }
}
// Export db and connectDB to be used in other modules

export default connectDB;
