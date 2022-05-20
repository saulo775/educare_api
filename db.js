import { MongoClient } from 'mongodb';
import dotenv from "dotenv"
dotenv.config();

let db = null;
const mongoClient = new MongoClient(process.env.MONGO_URI);

try {
    await mongoClient.connect();
    db = mongoClient.db(process.env.DB_NAME);
    console.log("Conectado ao banco!!!");
} catch (e) {
    console.log("Problema ao conectar ao banco de dados", e);
}

export default db;

// import { MongoClient } from "mongodb";
// import dotenv from "dotenv";
// dotenv.config();

// let cachedDb;

// const client = new MongoClient(`${process.env.MONGO_URI}`, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// export default async function connectMongoDB() {
//     if (cachedDb) {
//         return { db: cachedDb, client };
//     }
//     await client.connect();
//     const db = client.db(process.env.MONGO_DB);
//     cachedDb = db;
//     return { db, client };
// }