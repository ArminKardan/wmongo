
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

        // let result = await s.updateOne({name:"Velasquez Bernard"},{
        //     $currentDate:{
        //         ali:true
        //     }
        // })
        // console.log(result)


        let result = await s.findOne({name:"Velasquez Bernard"})
        console.log((result.ali as Date).toString())

        process.exit()

    } catch (e) {
        console.log("Something is wrong:", e)
    }
})()



