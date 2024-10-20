
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

        // let shorts = await s.find({height:{$lte:170}}).sort({height:1}).toArray()
        // console.log(shorts.length)
        
        // console.log(shorts.map(item=> item.height))

        // let shorts_abs = await s.find({height:{$lte:170}}).sort({height:1}).project({height:1,}).toArray()
        // console.log(shorts_abs)


        // let shorts_abs_noid = await s.find({height:{$lte:170}}).sort({height:1}).project({height:1, _id:0}).toArray()
        // console.log(shorts_abs_noid)


        
        // let shorts_abs_noid = await s.find({height:{$lte:170}}).sort({height:1}).project({height:1, _id:0}).toArray()
        // console.log(shorts_abs_noid)


        // console.log(shorts_abs_noid.slice(0, 5))


        // let shorts_abs_noid_limit = await s.find({height:{$lte:170}}).sort({height:-1}).project({height:1, _id:0}).limit(5).toArray()
        // console.log(shorts_abs_noid_limit)

        
        process.exit()

    } catch(e) {
        console.log("Something is wrong:", e)
    }
})()



