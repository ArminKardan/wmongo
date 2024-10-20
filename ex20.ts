
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


        // let result = await s.updateOne({ name: "Velasquez Bernard" }, {
        //     $set: {
        //         violations: [5,9,1,4,3]
        //     } as any
        // })
        // console.log(result)


        // let result = await s.updateOne({ name: "Velasquez Bernard" }, {
        //     $push: {
        //         violations: {
        //             $each:[],
        //             $sort:1
        //         }
        //     } as any
        // })
        // console.log(result)





        // let result = await s.updateOne({ name: "Velasquez Bernard" }, {
        //     $set: {
        //         violations: [
        //             {name:"a", score:10},
        //             {name:"b", score:2},
        //             {name:"c", score:8},
        //             {name:"d", score:7},
        //         ]
        //     } as any
        // })
        // console.log(result)


        // let result = await s.updateOne({ name: "Velasquez Bernard" }, {
        //     $push: {
        //         violations: {
        //             $each: [],
        //             $sort: { score: 1 }
        //         }
        //     } as any
        // })
        // console.log(result)


        // let result = await s.updateOne({ name: "Velasquez Bernard" }, {
        //     $push: {
        //         violations: {
        //             $each: [],
        //             $sort: { score: 1 },
        //             $slice: 2
        //         }
        //     } as any
        // })
        // console.log(result)


        // let nothing = await s.updateOne({ name: "Velasquez Bernard" }, {
        //     $push: {
        //         violations: {
        //             $sort: { score: 1 }
        //         }
        //     } as any
        // })
        // console.log(nothing)




        process.exit()

    } catch (e) {
        console.log("Something is wrong:", e)
    }
})()



