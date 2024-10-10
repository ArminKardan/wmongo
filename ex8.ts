
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
import fs from 'fs'
import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'
import path from 'path'

const envPath = path.resolve(__dirname, '.env.local');
if (fs.existsSync(envPath)) {
    dotenv.config({ path: envPath });
};

(async () => {

    const client = new MongoClient(process.env.MONGOURL);

    try {
        await client.connect();
        console.log('Connected to the MongoDB server');
        const db = client.db(process.env.MONGODB_DB);

        let s = await db.collection("students")

        let has_names = await s.find({name:{$exists:true}}).toArray()
        console.log(has_names)

        // let no_names = await s.find({name:{$exists:false}}).toArray()
        // console.log(no_names)


        process.exit()

    } catch {
        console.log("Failed to connect to Mongo Server.")
    }
})()


