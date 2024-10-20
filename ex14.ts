
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
        //     $inc:{
        //         height:3
        //     }
        // })
        // console.log(result)


        // let result = await s.updateOne({name:"Velasquez Bernard"},{
        //     $inc:{
        //         height:-3
        //     }
        // })
        // console.log(result)


        //  let result = await s.updateOne({name:"Velasquez Bernard"},{
        //     $mul:{
        //         height:1.2 
        //     }
        // })
        // console.log(result)


        // let result = await s.updateOne({ name: "Velasquez Bernard" }, {
        //     $min: {
        //         height: 150 //update bigger than 150 to 150
        //     }
        // })
        // console.log(result)


        // let result = await s.updateOne({ name: "Velasquez Bernard" }, {
        //     $max: {
        //         height: 160 //update smaller than 160 to 160
        //     }
        // })
        // console.log(result)


        process.exit()

    } catch (e) {
        console.log("Something is wrong:", e)
    }
})()



