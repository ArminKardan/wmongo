
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
        //     $push: {
        //         violations: {
        //             myfield2: "test2"
        //         }
        //     } as any
        // })
        // console.log(result)


        // let result = await s.updateOne({ name: "Velasquez Bernard" }, {
        //     $push: {
        //         violations: {
        //             $each: ["test2",{myfield:"yes"}],
        //         }
        //     } as any
        // })
        // console.log(result)


        let result = await s.updateOne({ name: "Velasquez Bernard" }, {
            $set: {
                violations: [1,2,3,4,5]
            } as any
        })
        console.log(result)


        // let result = await s.updateOne({ name: "Velasquez Bernard" }, {
        //     $push: {
        //         violations: {
        //             $each: [6,7],//add to the last
        //         }
        //     } as any
        // })
        // console.log(result)


        // let result = await s.updateOne({ name: "Velasquez Bernard" }, {
        //     $push: {
        //         violations: {
        //             $each: [8,9],//add to the last
        //             $slice:5
        //         }
        //     } as any
        // })
        // console.log(result)


        // let result = await s.updateOne({ name: "Velasquez Bernard" }, {
        //     $push: {
        //         violations: {
        //             $each: [6,7],//add to the last
        //             $slice:-4
        //         }
        //     } as any
        // })
        // console.log(result)




        // let result = await s.updateOne({ name: "Velasquez Bernard" }, {
        //     $push: {
        //         violations: {
        //             $each: [],
        //             $slice:-2 //take last two
        //         }
        //     } as any
        // })
        // console.log(result)


        // let result = await s.updateOne({ name: "Velasquez Bernard" }, {
        //     $set: {
        //         violations: [1, 2, 3, 4, 5]
        //     } as any
        // })
        // console.log(result)


        // let result = await s.updateOne({ name: "Velasquez Bernard" }, {
        //     $push: {
        //         violations: {
        //             $each: [0],
        //             $position:0,
        //             $slice: 3 //take first 3
        //         }
        //     } as any
        // })
        // console.log(result)





        process.exit()

    } catch (e) {
        console.log("Something is wrong:", e)
    }
})()



