
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

        // let myarray = [
        //     { height: 2 },
        //     { height: 3 },
        //     { height: 4 },
        //     { height: 5 },
        //     { height: 6 },
        //     { height: 7 },
        //     { height: 8 },
        //     { height: 9 }
        //   ]

        // let myarray_b = [6, 7 , 8 , 9]
        // let myarray_b = []


        // let myarray_b = myarray.filter(i=> i.height > 5).map(item => item.height)
        // let myarray_b = myarray.map(item => item.height).filter(i=> i > 5)

        // console.log(myarray_b)

        // for(let i of myarray)
        // {
        //     if(i > 5)
        //     {
        //         myarray_b.push(i)
        //     }
        // }

        
        // for(let i = 0; i < myarray.length; i++)
        // {
        //     if(myarray[i] > 5)
        //     {
        //         myarray_b.push(myarray[i])
        //     }
        // }
        
        // console.log(myarray_b)



        process.exit()

    } catch (e) {
        console.log("Something is wrong:", e)
    }
})()



