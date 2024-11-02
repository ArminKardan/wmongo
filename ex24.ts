
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

    // const client = new MongoClient(process.env.MONGOURL);

    // try {
        // await client.connect();
        // console.log('Connected to the MongoDB server');
        // const db = client.db(process.env.MONGODB_DB);

        // let s = await db.collection("students")

        // let students = await s.find({}).project({ height: 1, _id: 0 }).toArray()

        // let heights = students.map(st=> st.height).filter(num => num >= 170)
        // let heights = students.filter(st => st.height >= 170).map(st=> st.height)

        // let tall = students.filter(st=> st.height >= 170).map(i=> i.height)
        // // [1,2,3,4,5]

        // let sum = 0
        // for (let num of tall) {
        //     sum += num
        // }

        // console.log(sum / tall.length)


        // for(let i of students)
        // {
        //     heights.push(i.height + 3)
        // }

        // for(let i=0; i < students.length; i++)
        // {
        //     heights.push(students[i].height+5)
        // }







        // let students = await s.find({}).project({exam:1}).toArray()

        // let sum = 0;
        // let counter = 0
        // for(let st of students)
        // {
        //     let exams = st.exam //[{name:"math", score:51}, {}, {}, {}]

        //     for(let ex of exams)
        //     {
        //         if(ex.name == "math" && !isNaN(ex.score))
        //         {
        //             sum += ex.score
        //             counter++
        //         }
        //     }
        // }

        // console.log(sum / counter)







    //     let students = await s.find({}).project({ exam: 1 }).toArray()


    //     let maths = students.map(st => {
    //         let math = st.exam.filter(ex => ex.name == "math" && !isNaN(ex.score))
    //         if(math.length > 0)
    //         {
    //             let num = math[0].score
    //             return num
    //         }
    //         else
    //         {
    //             return null
    //         }
            
    //     }).filter(num=> num != null)


    //     // let u = [1,5,71, 82, null, 65, 84, 15]
    //     // let u = [1,5,71, 82, 65, 84, 15]


    //     let sum = 0;
    //     for (let num of maths) {
    //         sum += num
    //     }

    //     console.log(sum / maths.length)











    //     // console.log(heights)
    //     process.exit()

    // } catch (e) {
    //     console.log("Something is wrong:", e)
    // }
})()



